import React from 'react'
import './contact.css'

export default function Contact() {

        return (
            <div class="page-content">
		<div class="form-v4-content">
			<div class="form-left">
				<h2>INFOMATION</h2>
				<p class="text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Diam volutpat commodo.</p>
				<p class="text-2"><span>Eu ultrices:</span> Vitae auctor eu augue ut. Malesuada nunc vel risus commodo viverra. Praesent elementum facilisis leo vel.</p>
				<div class="form-left-last">
					<input type="submit" name="account" class="account" value="Have An Account" />
				</div>
			</div>
			<form class="form-detail" action="#" method="post" id="myform">
				<h2>REGISTER FORM</h2>
				<div class="form-group">
					<div class="form-row form-row-1">
						<label for="first_name">Your Name</label>
						<input type="text" name="first_name" id="first_name" class="input-text" />
					</div>
				</div>
				<div class="form-row">
					<label for="your_email">Your Email</label>
					<input type="text" name="useremail" id="useremail" class="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/>
				</div>
				<div class="form-group">
					<div class="form-row form-row-1 ">
						<label for="password">Message</label>
                        <textarea rows="7" cols="40" name="message"></textarea>
					</div>
				</div>
				<div class="form-row-last">
					<input type="submit" name="register" class="register" value="Register"/>
				</div>
			</form>
		</div>
	</div>
        )
}
