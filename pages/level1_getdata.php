<?php

    $input = array("set-union","set-intersection","set-difference","set-symmetric-difference","cartesian-product","set-partition","set-complement");
    $rand_keys = array_rand($input, 3);

    //getting question one
    $service_url_1 = 'https://mathgen-api.herokuapp.com/'.$input[$rand_keys[0]];
    $curl_1 = curl_init($service_url_1);
    curl_setopt($curl_1, CURLOPT_RETURNTRANSFER, true);
    $curl_response_1 = curl_exec($curl_1);
    if ($curl_response_1 === false) {
    $info_1 = curl_getinfo($curl_1);
    curl_close($curl_1);
    die('error occured during curl exec. Additioanl info: ' . var_export($info_1));
    }
    curl_close($curl_1);
    $decoded1 = json_decode($curl_response_1,true);
    $question1 = $decoded1["questions"][0]["question"];
    $answers1 = $decoded1["questions"][0]["answers"];
    $correctanswer1= $decoded1["questions"][0]["correctAnswer"];
    $difficulty1=$decoded1["questions"][0]["difficulty"];
   
    //getting question two
    $service_url_2 = 'https://mathgen-api.herokuapp.com/'.$input[$rand_keys[1]];
    $curl_2 = curl_init($service_url_2);
    curl_setopt($curl_2, CURLOPT_RETURNTRANSFER, true);
    $curl_response_2 = curl_exec($curl_2);
    if ($curl_response_2 === false) {
    $info_2 = curl_getinfo($curl_2);
    curl_close($curl_2);
    die('error occured during curl exec. Additioanl info: ' . var_export($info_2));
    }
    curl_close($curl_2);
    $decoded2 = json_decode($curl_response_2,true);
    $question2 = $decoded2["questions"][0]["question"];
    $answers2 = $decoded2["questions"][0]["answers"];
    $correctanswer2= $decoded2["questions"][0]["correctAnswer"];
    $difficulty2=$decoded2["questions"][0]["difficulty"];
  
    

    //getting question three
    $service_url_3 = 'https://mathgen-api.herokuapp.com/'.$input[$rand_keys[2]];
    $curl_3 = curl_init($service_url_3);
    curl_setopt($curl_3, CURLOPT_RETURNTRANSFER, true);
    $curl_response_3 = curl_exec($curl_3);
    if ($curl_response_3 === false) {
    $info_3 = curl_getinfo($curl_3);
    curl_close($curl_3);
    die('error occured during curl exec. Additioanl info: ' . var_export($info_3));
    }
    curl_close($curl_3);
    $decoded3 = json_decode($curl_response_3,true);
    $question3 = $decoded3["questions"][0]["question"];
    $answers3 = $decoded3["questions"][0]["answers"];
    $correctanswer3= $decoded3["questions"][0]["correctAnswer"];
    $difficulty3=$decoded3["questions"][0]["difficulty"];
    
    function CryptoJSAesEncrypt($passphrase, $plain_text) {

        $salt = openssl_random_pseudo_bytes(256);
        $iv = openssl_random_pseudo_bytes(16);
    
        $iterations = 999;
        $key = hash_pbkdf2("sha512", $passphrase, $salt, $iterations, 64);
     
        $encrypted_data = openssl_encrypt($plain_text, 'aes-256-cbc', hex2bin($key), OPENSSL_RAW_DATA, $iv);
     
        $data = array("ciphertext" => base64_encode($encrypted_data), "iv" => bin2hex($iv), "salt" => bin2hex($salt));
        return json_encode($data);
    }
     
     $correctanswer1encrypt = CryptoJSAesEncrypt("DontTry", $correctanswer1);
     $correctanswer2encrypt = CryptoJSAesEncrypt("DontTry", $correctanswer2);
     $correctanswer3encrypt = CryptoJSAesEncrypt("DontTry", $correctanswer3);
    
?>