import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import GetExtensionLink from './components/getExtensionLink';
import FetchVersion from './components/fetchVersion';
import DownloadVersion from './components/DownloadVersion';
import './styles/custom.css';

function App() {
  // ... (previous state and useEffect code remains unchanged)

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg">
            <Card.Body>
              <h1 className="text-center mb-4">Chrome Extension Downloader</h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <GetExtensionLink setDownloadUrl={setDownloadUrl} />
              {version && (
                <Alert variant="info" className="mt-3">
                  Current version: {version}
                </Alert>
              )}
              {downloadUrl && <DownloadVersion url={downloadUrl} />}
              <div className="disclaimer mt-4">
                <strong>Disclaimer:</strong> 
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
