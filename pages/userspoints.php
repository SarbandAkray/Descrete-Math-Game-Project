<?php
session_start();
if(isset($_POST["level1-points"])){
    $points = $_POST["level1-points"];
    $_SESSION["level1Points"]= $points;
}elseif(isset($_POST["level2-points"])){
    $points = $_POST["level2-points"];
    $_SESSION["level2Points"]= $points;
}elseif(isset($_POST["level3-points"])){
    $points = $_POST["level3-points"];
    $_SESSION["level3Points"]= $points;
}
