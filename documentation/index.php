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
                <a class="list-group-item list-group-item-action" id="get-lists" data-toggle="list"
                   href="#list-get-lists" role="tab" aria-controls="homeGet">Users > Lists</a>
                <a class="list-group-item list-group-item-action" id="get-tasks" data-toggle="list"
                   href="#list-get-tasks" role="tab" aria-controls="homeGet">Users > Lists > Tasks</a>
                <a class="list-group-item list-group-item-action" id="activities" data-toggle="list"
                   href="#list-activities" role="tab" aria-controls="profile">Activities</a>
                <a class="list-group-item list-group-item-action" id="categories" data-toggle="list"
                   href="#list-categories" role="tab" aria-controls="messages">Categories</a>
            </div>
        </div>
        <div class="col-8">
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="list-get-users" role="tabpanel" aria-labelledby="list-get-users">
                    <?php require('./src/users/get.php'); ?>
                    <br>
                    <?php require('./src/users/create.php'); ?>
                    <br>
                    <?php require('./src/users/put.php'); ?>
                    <br>
                    <?php require('./src/users/delete.php'); ?>
                </div>
                <div class="tab-pane fade" id="list-get-lists" role="tabpanel" aria-labelledby="list-get-lists">
                    <?php require('./src/users/lists/get.php'); ?>
                    <br>
<!--                    --><?php //require('./src/users/lists/create.php'); ?>
                    <br>
<!--                    --><?php //require('./src/users/lists/put.php'); ?>
                    <br>
<!--                    --><?php //require('./src/users/lists/delete.php'); ?>
                </div>
                <div class="tab-pane fade" id="list-get-tasks" role="tabpanel" aria-labelledby="list-get-tasks">
                    <?php require('./src/users/lists/tasks/get.php'); ?>
                    <br>
<!--                    --><?php //require('./src/users/lists/tasks/create.php'); ?>
                    <br>
<!--                    --><?php //require('./src/users/lists/tasks/put.php'); ?>
                    <br>
<!--                    --><?php //require('./src/users/lists/tasks/delete.php'); ?>
                </div>
                <div class="tab-pane fade" id="list-activities" role="tabpanel" aria-labelledby="list-activities">
                    <?php require('./src/activities/get.php'); ?>
                    <br>
                    <?php require('./src/activities/create.php'); ?>
                    <br>
                    <?php require('./src/activities/delete.php'); ?>
                </div>
                <div class="tab-pane fade" id="list-categories" role="tabpanel" aria-labelledby="list-categories">
                    <?php require('./src/categories/get.php'); ?>
                    <br>
                    <?php require('./src/categories/create.php'); ?>
                    <br>
                    <?php require('./src/categories/delete.php'); ?>
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