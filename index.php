<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="assets/css/normalize.css" rel="stylesheet">
    <link href="assets/css/style.css" rel="stylesheet">
    <title>Team Shulky Website</title>
</head>

<body>

    <header>

        <nav>
            <a href="#members">Members</a>
            <a href="#project">Project</a>
            <h2>Team <img src="assets/img/Shulker.jpg"> Shulky</h2>
            <a href="#project">Join the team</a>
            <a href="#contact">Contact</a>
        </nav>

    </header>

    <main>

        <div class="container">

            <div class="carousel">

                <div class="carousel-inner">

                    <div class="slide">
                        <img src="assets/img/fnaf1-carrousel.jpg" alt="Image 1">
                    </div>

                    <div class="slide">
                        <img src="assets/img/fnaf2-carrousel.jpg" alt="Image 2">
                    </div>
                </div>

                <div class="carousel-controls">

                    <button id="prev">
                        <div class="arrow-left"></div>
                    </button>

                    <button id="next">
                        <div class="arrow-right"></div>
                    </button>
                </div>

                <div class="carousel-dots"></div>
            </div>
        </div>

        <p class="title">Members :</p>

        <div id="members">

            <a href="https://fr.namemc.com/profile/Natouille04.1">
                <article>
                    <img src="assets/img/natouille'skin.png" id="natouille">
                    <p>Natouille</p>
                </article>
            </a>

            <a href="https://fr.namemc.com/profile/william95">
                <article>
                    <img src="assets/img/william95.png" id="william95">
                    <p>William95</p>
                </article>
            </a>

            <a href="https://fr.namemc.com/profile/0cross0">
                <article>
                    <img src="assets/img/cross.png" id="cross">
                    <p>0Cross0</p>
                </article>
            </a>

            <a href="https://fr.namemc.com/profile/Labonnemiche_77">
                <article>
                    <img src="assets/img/labonnemiche.png" id="labonnemiche">
                    <p>Labonnemiche_77</p>
                </article>
            </a>

        </div>

        <p class="title">Project :</p>

        <div id="project">

        <?php
// Connexion à la base de données MySQL
$servername = "localhost";
$username = "id21978315_nat";
$password = "#Nat040708";
$dbname = "id21978315_shulkydb";

$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Récupérer les données de la base de données
$sql = "SELECT * FROM article";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Afficher les données sous forme d'articles HTML
    while($row = $result->fetch_assoc()) {
        echo '<article class="project-article">';
        echo '<div class="project-img ' . $row["img"] . '"></div>';
        echo '<h3>' . $row["name"] . '</h3>';
        echo '<a class="article-button" href="' . $row["curseforge_link"] . '">Download - CurseForge Config</a>';
        echo '<a class="article-button" href="' . $row["mega_link"] . '">Download - Mega</a>';
        echo '</article>';
    }
} else {
    echo "0 results";
}
$conn->close();
?>

        </div>

        <p class="title">Join The Team :</p>

        <div id="join-the-team">
            <form action="mailto:doubleblockofficial@gmail.com" method="post" enctype="text/plain">

                <div class="form">
                    <div class="form1">
                        <label>Pseudo :</label>
                        <input id="pseudo" type="text" name="pseudo" required>

                        <label>Email :</label>
                        <input id="email" type="email" name="Email" required>

                    </div>

                    <div class="form2">
                        <label>Describe Yourself a bit :</label>
                        <input id="message" type="text" name="description of you" required>
                    </div>

                </div>

                <input type="submit" name="submit" value="Send" class="submit">

            </form>
        </div>

    </main>

    <br>

    <footer id="contact">

        <h2>Team <img src="assets/img/Shulker.jpg"> Shulky</h2>

    </footer>

    <script src="assets/js/app.js"></script>

</body>

</html>