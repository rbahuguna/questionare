<?php
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$email = $_POST['email'];
	$instructorlastname = $_POST['instructorlastname'];

	file_put_contents('data/questionare.data', $firstname.PHP_EOL , FILE_APPEND | LOCK_EX);
	file_put_contents('data/questionare.data', $lastname.PHP_EOL , FILE_APPEND | LOCK_EX);
	file_put_contents('data/questionare.data', $email.PHP_EOL , FILE_APPEND | LOCK_EX);
	file_put_contents('data/questionare.data', $instructorlastname.PHP_EOL , FILE_APPEND | LOCK_EX);
	file_put_contents('data/questionare.data', PHP_EOL , FILE_APPEND | LOCK_EX);

	include "questionare_success.html";
?>