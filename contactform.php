<? php
 use PHPMailer\PHPMailer\PHPMailer;

if (isset($_POST['name'])&& isset($_POST['email'])){
     $name = $_POST['name'];
     $mailFrom = $_POST['email'];
     $subject = $_POST['subject'];
     $message = $_POST['message'];

    require_once "PHPMailer/PHPMailer.php";
    require_once "PHPMailer/SMTP.php";
    require_once "PHPMailer/Exception.php";
    
    $mail = new PHPMailer();

    //SMTP settings
    $mail ->isSMTP();
    $mail ->Host = "smtp.gmail.com";
    $mail ->SMTPAuth = true;
    $mail ->Username = "hackerdude1308@gmail.com";
    $mail ->password = 'prashant91';
    $mail ->Port = 443;
    $mail ->SMTPSecure = "ss1";
     
    //email settings
    $mail-> isHTML(true);
    $mail-> setFrom($email, $name);
    $mail-> addAddress("hackerdude1308@gmail.com");
    $mail-> subject = ("$email($subject)");
    $mail-> message = $message;

    if($mail-> send()){
        $status = "success";
        $response = "E-mail sent!";
    }
    else{
        $status = "failed";
        $response = "location: index.html"
    }
    exit(json_encode(array("status"=> $status, "response" => $response)));


?>
