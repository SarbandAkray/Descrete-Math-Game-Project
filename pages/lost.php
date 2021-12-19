<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Over</title>
    <link rel="stylesheet" href="../styles/lost.css">
</head>
<body>
    <script>
        var audio = new Audio('../sounds/gameLost.mp3');
        audio.play();
    </script>
<div class="gamelost-box">
    <div class="lost-box">
        <p class="title">Game over</p>
        <p class="question">do you want to play again</p>
        <div>
        <button onclick="location.href='../index.php'">YES</button>
        <button onclick="location.href='/index.php'">NO</button>
        </div>
    </div>
</div>
</body>
</html>