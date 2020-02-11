<div class="accordion" id="accordionGet">
    <div class="card">
        <div class="card-header" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-dark" type="button" data-toggle="collapse"
                        data-target="#collapseGetCategories" aria-expanded="true"
                        aria-controls="collapseGetCategories">
                    Show / Hide
                </button>
                <button type="button" class="btn btn-success disabled">Get</button>
                /categories/
            </h2>
        </div>

        <div id="collapseGetCategories" class="collapse collapsed" aria-labelledby="headingOne"
             data-parent="#accordionGet">
            <div class="card-body">
                <h2>Get All Categories</h2>
                <hr>
                <h3>Implementation Notes</h3>
                <p>
                    To show all categories
                </p>
                <h3>
                    Response Class (Status 200)
                </h3>
                <p>Successful response</p>
                <code>
                    [
                    {
                    "item": {
                    "id": "AEtoumz4tz3njY0lfrTH",
                    "title": "learning"
                    }
                    }, [...] ]
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
    <div class="card">
        <div class="card-header" id="headingOneCategory">
            <h2 class="mb-0">
                <button class="btn btn-dark" type="button" data-toggle="collapse"
                        data-target="#collapseGetOneCategory" aria-expanded="true"
                        aria-controls="collapseGetOneCategory">
                    Show / Hide
                </button>
                <button type="button" class="btn btn-success disabled">Get</button>
                /categories/{categoryId}
            </h2>
        </div>

        <div id="collapseGetOneCategory" class="collapse collapsed" aria-labelledby="headingOneCategory"
             data-parent="#accordionGet">
            <div class="card-body">
                <h2>Get One Categories</h2>
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