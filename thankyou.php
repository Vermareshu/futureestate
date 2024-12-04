<?php session_start(); // Start the session

// Check if the form has been submitted
if (!isset($_SESSION['form_submitted']) || $_SESSION['form_submitted'] !== true) {
    // If the form was not submitted, redirect to the form or homepage
    header("Location:index.php");
    exit(); // Stop further execution
}
?>
<body>
<?php include "./layouts/header.php" ?>

<div class="container-fluid bg-white" style="height: 100vh;">
    <div class="row h-100">
        <div class="col-lg-12 d-flex justify-content-center align-items-center flex-column ">
            <h1 class="fw-bold text-dark">THANK YOU !</h1>
            <div>
                <i class="fa-solid fa-check mt-3" style="font-size: 80px;"></i>
            </div>
            <div>
                <button class="py-2 px-5 mt-3 customThankuBtn fw-bold"><a href="index.php" style="text-decoration:none">HOME</a></button>
            </div>
        </div>
    </div>
</div>
</body>
<?php
unset($_SESSION['form_submitted']);
?>
<?php include "./layouts/footer.php" ?>