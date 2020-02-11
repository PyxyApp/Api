<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>API - Documentation</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>

<div class="container mt-4">
    <div class="row">
        <div class="col-4">
            <div class="list-group" id="list-tab" role="tablist">
                <a class="list-group-item list-group-item-action active" id="get-users" data-toggle="list"
                   href="#list-get-users" role="tab" aria-controls="homeGet">Users</a>
                <a class="list-group-item list-group-item-action" id="activities" data-toggle="list"
                   href="#list-activities" role="tab" aria-controls="profile">Activities</a>
                <a class="list-group-item list-group-item-action" id="categories" data-toggle="list"
                   href="#list-categories" role="tab" aria-controls="messages">Categories</a>
            </div>
        </div>
        <div class="col-8">
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="list-get-users" role="tabpanel" aria-labelledby="list-get-users">
                    <?php require('./src/get.php'); ?>
                    <?php require('./src/create.php'); ?>
                    <br>
                    <?php require('./src/put.php'); ?>
                    <br>
                    <?php require('./src/delete.php'); ?>
                </div>
                <div class="tab-pane fade" id="list-activities" role="tabpanel" aria-labelledby="list-activities">
                </div>
                <div class="tab-pane fade" id="list-categories" role="tabpanel" aria-labelledby="list-categories">
                </div>
            </div>
        </div>
    </div>
</div>


<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
</body>
</html>