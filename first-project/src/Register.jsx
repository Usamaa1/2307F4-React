import React from 'react'

const Register = () => {







    return (
        <>
            <form>

                <div class="col">
                    <div data-mdb-input-init class="form-outline">
                        <input type="text" id="form3Example1" class="form-control" />
                        <label class="form-label" for="form3Example1">Username</label>
                    </div>
                </div>



                <div data-mdb-input-init class="form-outline mb-4">
                    <input type="email" id="form3Example3" class="form-control" />
                    <label class="form-label" for="form3Example3">Email address</label>
                </div>


                <div data-mdb-input-init class="form-outline mb-4">
                    <input type="password" id="form3Example4" class="form-control" />
                    <label class="form-label" for="form3Example4">Password</label>
                </div>





                <button data-mdb-ripple-init type="button" class="btn btn-primary btn-block mb-4">Sign up</button>
            </form>



        </>
    )
}

export default Register