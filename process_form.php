<?php
session_start();
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form inputs
    $name = trim($_POST["name"]);
    $mobile = trim($_POST["mobile"]);
    $message = trim($_POST["message"]);
    $email = trim($_POST["email"]);
    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';
    $mail = new PHPMailer(true);

    try {
        //Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPSecure = 'tls';
        $mail->Host = "smtp.gmail.com";                   //Set the SMTP server to send through
        $mail->SMTPAuth = true;                                   //Enable SMTP authentication
        $mail->Username = 'info.thewoodenstrings@gmail.com';                     //SMTP username
        $mail->Password = ' xcebwquejoenferl';                               //SMTP password uftjklwszyqqvbyd
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
        $mail->Port = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('info.thewoodenstrings@gmail.com', 'Future Estate');
        $mail->addAddress('vermareshu0401@gmail.com', 'admin');


        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Website Query';
        $mail->Body = "<b> Sender Name - $name <br> Mobile No. - $mobile <br> E-mail - $email <br> Message - $message</b>";


        $mail->send();
        $_SESSION['form_submitted'] = true;
        echo "success";
       
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
