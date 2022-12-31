

function ContactCard( { state } ) {

    if (state === 'contact') {

    return (

        <div className="modal-dialog modal-dialog-centered">
            <div className="card mb-5 bg-light text-center" id='contact-card' style={{ width: '20rem' }}>
                <div className="card-body d-flex justify-content-center flex-column gap-1">
                    <h5 className="card-title">Michael McGraw</h5>
                    <p className="card-text">
                        Fullstack Developer
                    </p>
                    <div className="d-flex flex-row justify-content-around ">
                        <a href="https://github.com/McTimidation" target='_blank'><img src="./images/003-github.png" alt="git" style={{ height: '3rem' }} /></a>
                        <a href="michaelmcgraw09@gmail.com"><img src="./images/004-envelope.png" alt="email" style={{ height: '3rem' }} /></a>
                        <a href="https://www.linkedin.com/in/alex-galvan0/" target='_blank'><img src="./images/001-linkedin.png" alt="git" style={{ height: '3rem' }} /></a>
                    </div>


                </div>
            </div>

        </div>



    ) }
}

export default ContactCard