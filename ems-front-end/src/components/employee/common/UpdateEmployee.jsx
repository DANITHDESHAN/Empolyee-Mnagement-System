import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image'

export default function UpdateEmployee() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container maxWidth="xl">
        <header className="mb-3">Update Employee</header>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" placeholder="First name" />
            <Form.Control.Feedback type="invalid">
              Please Enter a First Name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
            <Form.Control.Feedback type="invalid">
              Please Enter a Last Name.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>Title</Form.Label>
            <Form.Select type="text" placeholder="Select" required>
              <option selected disabled value="">
                Select
              </option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please Select a Title.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>Gender</Form.Label>
            <Form.Select type="text" placeholder="Gender" required>
              <option selected disabled value="">
                Select
              </option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please Select a Gender.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>NIC</Form.Label>
            <Form.Control type="text" placeholder="NIC" required />
            <Form.Control.Feedback type="invalid">
              Please Enter a NIC.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="text" placeholder="yyyy/mm/dd" required />
            <Form.Control.Feedback type="invalid">
              Please Enter a DOB.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text" placeholder="Contact Number" required />
            <Form.Control.Feedback type="invalid">
              Please Enter Contact Number.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>E-mail</Form.Label>
            <Form.Control required type="text" placeholder="E-mail" />
            <Form.Control.Feedback type="invalid">
              Please Enter a E-mail.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Department</Form.Label>
            <Form.Select type="text" placeholder="Department" required>
              <option selected disabled value="">
                Select
              </option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please Select a Department.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Designation</Form.Label>
            <Form.Select type="text" placeholder="Designation" required>
              <option selected disabled value="">
                Select
              </option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please Select a Designation.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Nationality</Form.Label>
            <Form.Select type="text" placeholder="Nationality" required>
              <option selected disabled value="">
                Select
              </option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please Select a Nationality.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Address</Form.Label>
            <Form.Control required type="text" placeholder="Address" />
            <Form.Control.Feedback mt="5" type="invalid">
              Please Enter a Address
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Country</Form.Label>
            <Form.Select type="text" placeholder="Country" required>
              <option selected disabled value="">
                Select
              </option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please Select a Country.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Select type="text" placeholder="City" required>
              <option selected disabled value="">
                Select
              </option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please Select a City.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control type="file" required />
            <Form.Control.Feedback type="invalid">
              Please Enter a Title.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} required />
            <Form.Control.Feedback type="invalid">
              Please Enter a Description.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Remakes</Form.Label>
            <Form.Control as="textarea" rows={3} required />
            <Form.Control.Feedback type="invalid">
              Please Enter a Remakes.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Active"
            feedback="You must update status before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        <Stack direction="horizontal" gap={3}>
          <Button className="ms-auto" type="submit" variant="primary" size="sm">
            Submit
          </Button>
          <Button variant="success" size="sm">
            Reset
          </Button>
        </Stack>
        <Image></Image>
      </Form>
    </Container>
  );
}
