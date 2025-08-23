import { 
	PASSWORD_RESET_REQUEST_TEMPLATE, 
	PASSWORD_RESET_SUCCESS_TEMPLATE, 
	VERIFICATION_EMAIL_TEMPLATE 
  } from "./emailTemplates.js";
  import { transporter, sender } from "./nodemailer.config.js";
  
  export const sendVerificationEmail = async (email, verificationToken) => {
	try {
	  const mailOptions = {
		from: `${sender.name} <${sender.email}>`,
		to: email,
		subject: "Verify your email",
		html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
	  };
  
	  const response = await transporter.sendMail(mailOptions);
	  console.log("Email sent successfully", response);
	} catch (error) {
	  console.error(`Error sending verification`, error);
	  throw new Error(`Error sending verification email: ${error}`);
	}
  };
  
  export const sendWelcomeEmail = async (email, name) => {
	try {
	  // For welcome email, you'll need to create a template or HTML content
	  // since Nodemailer doesn't have built-in template functionality like Mailtrap
	   const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Your New Social World!</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #14171a; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f7f9fa;">
  <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
    <div style="background: white; width: 70px; height: 70px; border-radius: 50%; display: inline-block; line-height: 70px; margin-bottom: 15px;">
      <span style="font-size: 35px;">🎉</span>
    </div>
    <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">Welcome to Your New Social World!</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Your journey starts here</p>
  </div>
  <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <p style="font-size: 18px; margin-bottom: 20px; color: #1da1f2; font-weight: 600;">Hello \${name}! 👋</p>
    <p style="margin-bottom: 25px; font-size: 16px;">Congratulations on joining our amazing community! We're thrilled to have you here and can't wait to see the incredible content you'll create and share.</p>
    
    <div style="background: linear-gradient(135deg, #f8f9fa, #e9ecef); padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #667eea;">
      <h3 style="margin: 0 0 15px 0; color: #495057; font-size: 18px;">🚀 You're All Set! Here's What You Can Do:</h3>
      <ul style="margin: 0; padding-left: 20px; color: #6c757d;">
        <li style="margin-bottom: 10px;"><strong>📝 Share Your Story:</strong> Create your first post and let the world know what's on your mind</li>
        <li style="margin-bottom: 10px;"><strong>🎥 Create Reels:</strong> Show off your creativity with short, engaging video content</li>
        <li style="margin-bottom: 10px;"><strong>👥 Connect & Follow:</strong> Find friends, discover new creators, and build your network</li>
        <li style="margin-bottom: 10px;"><strong>💬 Engage:</strong> Like, comment, and share content that inspires you</li>
        <li style="margin-bottom: 10px;"><strong>🔥 Trending:</strong> Stay updated with what's happening in your community</li>
      </ul>
    </div>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="#" style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 14px 28px; text-decoration: none; border-radius: 25px; font-weight: bold; font-size: 16px; display: inline-block;">
        🎬 Start Creating Now
      </a>
    </div>
    
    <div style="background-color: #e3f2fd; border: 1px solid #90caf9; padding: 20px; border-radius: 8px; margin: 25px 0;">
      <h4 style="margin: 0 0 10px 0; color: #1565c0; font-size: 16px;">💡 Pro Tip for New Creators:</h4>
      <p style="margin: 0; color: #1976d2; font-size: 14px;">Complete your profile, add a bio, and upload a profile picture to make a great first impression. Authentic profiles get 3x more engagement!</p>
    </div>
    
    <p style="margin-bottom: 20px;">Your account is now fully verified and ready to go! If you have any questions, need tips on creating great content, or just want to say hello, our community support team is here to help.</p>
    
    <p style="margin-bottom: 0;">Welcome to the family! 🌟<br><strong>The Social Team</strong></p>
  </div>
  <div style="text-align: center; margin-top: 25px; color: #657786; font-size: 14px;">
    <p style="margin: 0;">This is an automated message, please do not reply to this email.</p>
    <p style="margin: 5px 0;">Questions? <a href="mailto:support@yourapp.com" style="color: #1da1f2; text-decoration: none;">support@yourapp.com</a> | Follow us: <a href="#" style="color: #1da1f2; text-decoration: none;">@YourApp</a></p>
  </div>
</body>
</html>
`;
  
	  const mailOptions = {
		from: `${sender.name} <${sender.email}>`,
		to: email,
		subject: "Welcome to Auth Company",
		html: WELCOME_EMAIL_TEMPLATE.replace("{name}", name),
	  };
  
	  const response = await transporter.sendMail(mailOptions);
	  console.log("Welcome email sent successfully", response);
	} catch (error) {
	  console.error(`Error sending welcome email`, error);
	  throw new Error(`Error sending welcome email: ${error}`);
	}
  };
  
  export const sendPasswordResetEmail = async (email, resetURL) => {
	try {
	  const mailOptions = {
		from: `${sender.name} <${sender.email}>`,
		to: email,
		subject: "Reset your password",
		html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
	  };
  
	  const response = await transporter.sendMail(mailOptions);
	  console.log("Password reset email sent successfully", response);
	} catch (error) {
	  console.error(`Error sending password reset email`, error);
	  throw new Error(`Error sending password reset email: ${error}`);
	}
  };
  
  export const sendResetSuccessEmail = async (email) => {
	try {
	  const mailOptions = {
		from: `${sender.name} <${sender.email}>`,
		to: email,
		subject: "Password Reset Successful",
		html: PASSWORD_RESET_SUCCESS_TEMPLATE,
	  };
  
	  const response = await transporter.sendMail(mailOptions);
	  console.log("Password reset email sent successfully", response);
	} catch (error) {
	  console.error(`Error sending password reset success email`, error);
	  throw new Error(`Error sending password reset success email: ${error}`);
	}
  };