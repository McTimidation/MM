import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ContactCard(props) {


        return (

            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="modalTitle">
                        Michael McGraw
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Full Stack Developer</h4>
                    <div className="d-flex flex-row justify-content-around ">
                        <a href="https://github.com/McTimidation" target='_blank'><img src={require("../images/003-github.png")} alt="git" style={{ height: '3rem' }} /></a>
                        <a href="mailto:michaelmcgraw09@gmail.com"><img src={require("../images/004-envelope.png")} alt="email" style={{ height: '3rem' }} /></a>
                        <a href="https://www.linkedin.com/in/michael-mcgraw-521341255/" target='_blank'><img src={require("../images/001-linkedin.png")} alt="git" style={{ height: '3rem' }} /></a>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button id='closeBtn' onClick={props.onHide}>Close</Button>
                </Modal.Footer>


            </Modal>



        )
    
}

export default ContactCard