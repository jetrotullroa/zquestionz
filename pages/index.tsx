import { useCallback, useMemo, useState } from 'react';
import { Container, Row, Col, Button, Stack, Form } from 'react-bootstrap';
import data from '../json/data.json';
import { Question } from '@/components/Question';

export default function Home() {
  const [page, setPage] = useState(1);

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
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100 w-100">
      <Row className="mb-5">
        <Col>
          <h1 className="font-grey-600 fs-1 fw-bolder">{title}</h1>
        </Col>
      </Row>

      <Question activeQuestion={activeQuestion} />
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
              <Button
                disabled={isMaxPage}
                size="lg"
                variant="dark"
                className="px-4 py-2 rounded"
                onClick={() => onNextButtonClicked(page, setPage)}
              >
                Next
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
