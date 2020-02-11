<div class="accordion" id="accordionCreate">
    <div class="card">
        <div class="card-header" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-dark" type="button" data-toggle="collapse"
                        data-target="#collapseCreateActivities" aria-expanded="true" aria-controls="collapseCreateActivities">
                    Show / Hide
                </button>
                <button type="button" class="btn btn-warning disabled">Create</button>
                /activities/create/
            </h2>
        </div>

        <div id="collapseCreateActivities" class="collapse collapsed" aria-labelledby="headingOne"
             data-parent="#accordionCreate">
            <div class="card-body">
                <h2>Create Activity</h2>
                <hr>
                <h3>Implementation Notes</h3>
                <p>
                    To show one categories by ID.
                </p>
                <h3>
                    Response Class (Status 200)
                </h3>
                <p>Successful response</p>
                <code>
                    {
                    "id": "AEtoumz4tz3njY0lfrTH",
                    "title": "learning"
                    }
                </code>
                <hr>
                <h3>Parameters</h3>
                <table class="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">Parameters</th>
                        <th scope="col">Description</th>
                        <th scope="col">Data Type</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>id</td>
                        <td>Unique key for search by ID, Delete by id.. This Id is generate automatically when data is created.</td>
                        <td>String</td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>Name of categories to found it when user create a new list in select categories.</td>
                        <td>String</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>