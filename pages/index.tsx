import { createContext, useCallback, useMemo, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Stack,
  Form,
  Spinner
} from 'react-bootstrap';
import data from '../json/data.json';
import { Question } from '@/components/Question';
import PageLoader from 'next/dist/client/page-loader';

const MOCK_URL = 'localhost:3000/api/character';

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageValid, setPageValid] = useState(false);
  const [submittingForm, setSubmittingForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [answers, setAnswers] = useState<
    Record<string, string | number | boolean | string[]>
  >({});

  const { title, questionnaire } = data;
  const totalPageCount = questionnaire.length;
  const isMaxPage = page === totalPageCount;
  const activeQuestion = useMemo(() => questionnaire[page - 1], [page]);

  const onBackButtonClicked = useCallback(
    (currentPage: number, callback: CallableFunction) => {
      if (currentPage === 1) {
        return;
      }
      callback((oldState: number) => oldState - 1);
    },
    [page]
  );

  const onNextButtonClicked = useCallback(
    (currentPage: number, callback: CallableFunction) => {
      if (currentPage === totalPageCount) {
        return;
      }
      callback((oldState: number) => oldState + 1);
    },
    [page]
  );

  const onSubmitButtonClicked = useCallback(() => {
    // this will error because its a mock API call
    setSubmittingForm(true);

    fetch(MOCK_URL, {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(answers),
      cache: 'default'
    })
      .then(() => {
        setTimeout(() => {
          setFormSubmitted(true);
          setSubmittingForm(false);
        }, 5000);
      })
      .catch(() => {
        setTimeout(() => {
          setFormSubmitted(true);
          setSubmittingForm(false);
        }, 5000);
      });
  }, [answers]);

  console.log(answers);
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100 w-100">
      <Row className="mb-5">
        <Col>
          <h1 className="font-grey-600 fs-1 fw-bolder">{title}</h1>
        </Col>
      </Row>
      {submittingForm ? (
        <>
          <h1 className="font-red-600 fs-2 fw-bolder">Writing your story...</h1>
          <Spinner animation="grow" />
        </>
      ) : formSubmitted ? (
        <>
          <h1 className="font-green-600 fs-2 fw-bolder">
            Your character has been created!
          </h1>
          <h1 className="font-green-600 fs-2 fw-bolder">
            Please check your email for more info.
          </h1>
        </>
      ) : (
        <>
          <Question
            activeQuestion={activeQuestion}
            pageValid={pageValid}
            setPageValid={setPageValid}
            answers={answers}
            setAnswers={setAnswers}
          />
          <Row className="w-100 mt-5">
            <Col className="d-flex align-items-center justify-content-around w-100">
              <Row>
                <Col>
                  <Button
                    disabled={page === 1}
                    size="lg"
                    variant="dark"
                    className="px-4 py-2 rounded"
                    onClick={() => onBackButtonClicked(page, setPage)}
                  >
                    Back
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2>
                    {page} / {totalPageCount}
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  {isMaxPage ? (
                    <Button
                      disabled={
                        !pageValid &&
                        Object.keys(answers).length !== totalPageCount
                      }
                      size="lg"
                      variant="dark"
                      className="px-4 py-2 rounded"
                      onClick={onSubmitButtonClicked}
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      disabled={!pageValid}
                      size="lg"
                      variant="dark"
                      className="px-4 py-2 rounded"
                      onClick={() => onNextButtonClicked(page, setPage)}
                    >
                      Next
                    </Button>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}
