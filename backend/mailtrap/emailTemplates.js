export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to the Community!</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #14171a; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f7f9fa;">
  <div style="background: linear-gradient(135deg, #1da1f2, #1991db); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
    <div style="background: white; width: 60px; height: 60px; border-radius: 50%; display: inline-block; line-height: 60px; margin-bottom: 15px;">
      <span style="font-size: 30px;">🚀</span>
    </div>
    <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">Welcome to the Community!</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">You're one step away from sharing your story</p>
  </div>
  <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <p style="font-size: 16px; margin-bottom: 20px;">Hey there! 👋</p>
    <p style="margin-bottom: 20px;">Thanks for joining our community! We're excited to have you here. To start sharing posts, stories, and reels with the world, please verify your email address.</p>
    
    <div style="text-align: center; margin: 35px 0;">
      <div style="background: linear-gradient(135deg, #1da1f2, #1991db); padding: 20px; border-radius: 12px; display: inline-block;">
        <p style="color: white; margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Your Verification Code</p>
        <span style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: white; font-family: 'Courier New', monospace;">{verificationCode}</span>
      </div>
    </div>
    
    <p style="margin-bottom: 20px;">Enter this code in the app to complete your registration and start:</p>
    <ul style="margin: 20px 0; padding-left: 20px;">
      <li style="margin-bottom: 8px;">📝 Sharing your thoughts and updates</li>
      <li style="margin-bottom: 8px;">🎥 Creating and watching reels</li>
      <li style="margin-bottom: 8px;">💬 Connecting with friends and followers</li>
      <li style="margin-bottom: 8px;">❤️ Liking and commenting on posts</li>
    </ul>
    
    <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin: 25px 0;">
      <p style="margin: 0; color: #856404; font-size: 14px;">⏰ <strong>Time sensitive:</strong> This code expires in 15 minutes for security.</p>
    </div>
    
    <p style="margin-bottom: 20px;">If you didn't create an account with us, you can safely ignore this email.</p>
    <p style="margin-bottom: 0;">Welcome to the community!<br><strong>The Social Team</strong> 🎉</p>
  </div>
  <div style="text-align: center; margin-top: 25px; color: #657786; font-size: 14px;">
    <p style="margin: 0;">This is an automated message, please do not reply to this email.</p>
    <p style="margin: 5px 0 0 0;">Follow us: <a href="#" style="color: #1da1f2; text-decoration: none;">@YourApp</a></p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Updated Successfully</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #14171a; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f7f9fa;">
  <div style="background: linear-gradient(135deg, #17bf63, #14a85f); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
    <div style="background: white; width: 80px; height: 80px; border-radius: 50%; display: inline-block; line-height: 80px; margin-bottom: 15px;">
      <span style="font-size: 40px; color: #17bf63;">✓</span>
    </div>
    <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">Password Updated!</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Your account is secure</p>
  </div>
  <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <p style="font-size: 16px; margin-bottom: 20px;">All set! 🔐</p>
    <p style="margin-bottom: 25px;">Your password has been successfully updated. You can now continue sharing posts, creating reels, and connecting with your community using your new password.</p>
    
    <div style="background: linear-gradient(135deg, #f8f9fa, #e9ecef); padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #17bf63;">
      <h3 style="margin: 0 0 15px 0; color: #495057; font-size: 18px;">🛡️ Keep Your Account Safe</h3>
      <ul style="margin: 0; padding-left: 20px; color: #6c757d;">
        <li style="margin-bottom: 8px;">Use a strong, unique password</li>
        <li style="margin-bottom: 8px;">Don't share your login details with anyone</li>
        <li style="margin-bottom: 8px;">Log out from shared devices</li>
        <li style="margin-bottom: 8px;">Enable two-factor authentication in your settings</li>
      </ul>
    </div>
    
    <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin: 25px 0;">
      <p style="margin: 0; color: #856404; font-size: 14px;">⚠️ <strong>Didn't change your password?</strong> Contact our support team immediately at <a href="mailto:support@yourapp.com" style="color: #856404;">support@yourapp.com</a></p>
    </div>
    
    <p style="margin-bottom: 0;">Happy posting!<br><strong>The Social Team</strong> 📱</p>
  </div>
  <div style="text-align: center; margin-top: 25px; color: #657786; font-size: 14px;">
    <p style="margin: 0;">This is an automated message, please do not reply to this email.</p>
    <p style="margin: 5px 0 0 0;">Need help? <a href="#" style="color: #1da1f2; text-decoration: none;">Visit our Help Center</a></p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #14171a; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f7f9fa;">
  <div style="background: linear-gradient(135deg, #ff6b6b, #ee5a5a); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
    <div style="background: white; width: 70px; height: 70px; border-radius: 50%; display: inline-block; line-height: 70px; margin-bottom: 15px;">
      <span style="font-size: 35px;">🔑</span>
    </div>
    <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">Reset Your Password</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Let's get you back to your community</p>
  </div>
  <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <p style="font-size: 16px; margin-bottom: 20px;">Hey there! 👋</p>
    <p style="margin-bottom: 25px;">We received a request to reset the password for your account. Don't worry - it happens to the best of us! If you didn't make this request, you can safely ignore this email.</p>
    
    <div style="text-align: center; margin: 35px 0;">
      <a href="{resetURL}" style="background: linear-gradient(135deg, #ff6b6b, #ee5a5a); color: white; padding: 16px 32px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 16px; display: inline-block; transition: all 0.3s ease;">
        🔓 Reset My Password
      </a>
    </div>
    
    <div style="background: linear-gradient(135deg, #f8f9fa, #e9ecef); padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #ff6b6b;">
      <h3 style="margin: 0 0 15px 0; color: #495057; font-size: 18px;">📱 Back to Your Social Life</h3>
      <p style="margin: 0; color: #6c757d;">Once you reset your password, you'll be back to:</p>
      <ul style="margin: 10px 0 0 0; padding-left: 20px; color: #6c757d;">
        <li style="margin-bottom: 5px;">Sharing your latest posts and updates</li>
        <li style="margin-bottom: 5px;">Creating amazing reels and stories</li>
        <li style="margin-bottom: 5px;">Engaging with your followers and friends</li>
        <li>Discovering new content and creators</li>
      </ul>
    </div>
    
    <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin: 25px 0;">
      <p style="margin: 0; color: #856404; font-size: 14px;">⏰ <strong>Act fast:</strong> This reset link expires in 1 hour for security reasons.</p>
    </div>
    
    <p style="margin-bottom: 20px; font-size: 14px; color: #657786;">If the button doesn't work, copy and paste this link into your browser:<br>
    <a href="{resetURL}" style="color: #1da1f2; word-break: break-all;">{resetURL}</a></p>
    
    <p style="margin-bottom: 0;">Need help? We're here for you!<br><strong>The Social Team</strong> 💙</p>
  </div>
  <div style="text-align: center; margin-top: 25px; color: #657786; font-size: 14px;">
    <p style="margin: 0;">This is an automated message, please do not reply to this email.</p>
    <p style="margin: 5px 0 0 0;">Contact us: <a href="mailto:support@yourapp.com" style="color: #1da1f2; text-decoration: none;">support@yourapp.com</a></p>
  </div>
</body>
</html>
`;