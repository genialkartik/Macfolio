import React from 'react'
import './contact.css'

export default function Contact() {

        return (
            <div className="page-content">
		<div className="form-v4-content">
			<div className="form-left">
				<h2>INFOMATION</h2>
				<p className="text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Diam volutpat commodo.</p>
				<p className="text-2"><span>Eu ultrices:</span> Vitae auctor eu augue ut. Malesuada nunc vel risus commodo viverra. Praesent elementum facilisis leo vel.</p>
				<div className="form-left-last">
					<input type="submit" name="account" className="account" value="Have An Account" />
				</div>
			</div>
			<form className="form-detail" action="#" method="post" id="myform">
				<h2>REGISTER FORM</h2>
				<div className="form-group">
					<div className="form-row form-row-1">
						<label for="first_name">Your Name</label>
						<input type="text" name="first_name" id="first_name" className="input-text" />
					</div>
				</div>
				<div className="form-row">
					<label for="your_email">Your Email</label>
					<input type="text" name="useremail" id="useremail" className="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/>
				</div>
				<div className="form-group">
					<div className="form-row form-row-1 ">
						<label for="password">Message</label>
                        <textarea rows="7" cols="40" name="message"></textarea>
					</div>
				</div>
				<div className="form-row-last">
					<input type="submit" name="register" className="register" value="Register"/>
				</div>
			</form>
		</div>
	</div>
        )
}
