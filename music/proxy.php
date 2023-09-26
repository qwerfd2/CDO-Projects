<?php
if (isset($_GET['url'])) {
    $externalAudioURL = $_GET['url'];

    header('Content-Type: audio/mpeg');
    header('Access-Control-Allow-Origin: *');

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $externalAudioURL);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $audioData = curl_exec($ch);

    if ($audioData === false) {
        header('HTTP/1.1 500 Internal Server Error');
    } else {
        echo $audioData;
    }

    curl_close($ch);
} else {
    header('HTTP/1.1 400 Bad Request');
    echo 'Missing "url" parameter.';
}
?>