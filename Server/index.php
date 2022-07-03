<!-- <?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\SMTP;
  require 'vendor/autoload.php';

  $dotenv = Dotenv\Dotenv::createImmutable("./");
  $dotenv->load();

  $mail = new PHPMailer(true);

  //data from request
  $rest_json = file_get_contents("php://input");
  $_POST = json_decode($rest_json, true);

  if (empty($_POST['email']) || empty($_POST['topic']) || empty($_POST['content'])) die();

  if($_POST){
    http_response_code(200);

    //mail credentials
    $to = $_ENV["TO"];
    $from = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['topic']);
    $content = htmlspecialchars($_POST['content']);
    echo utf8_encode($_POST['content']);
    try {
      //Server settings
      $mail->SMTPDebug = SMTP::DEBUG_SERVER;
      $mail->isSMTP();
      $mail->Host       = $_ENV["HOST"];
      $mail->SMTPAuth   = true;
      $mail->Username   = $_ENV["USERNAME"];
      $mail->Password   = $_ENV["PASSWORD"];
      $mail->Port       = $_ENV["PORT"];
      $mail->CharSet = "UTF-8";

      //Recipients
      $mail->setFrom("a-tel-Borzek@outlook.com", "Formularz kontaktowy");
      $mail->addAddress($to);
      // $mail->addAddress('');

      $mail->isHTML(true);        
      $mail->Subject = $subject;
      $mail->Body    = "<b>Nadawca: </b>$from </br>
                        <b>Temat: </b>$subject</br>
                        <b>Treść: </b>$content";
      
      $mail->AltBody = "Nadawca:$from  
                        Temat: $subject  
                        Treść: $content";

      $mail->send();
      http_response_code(200);

    } catch (Exception $e) {
        echo json_encode(["status" => false, "info"=>"Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
        http_response_code(500);
    }
  }
?> -->