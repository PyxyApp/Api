<div class="accordion" id="accordionDelete">
    <div class="card">
        <div class="card-header" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-dark" type="button" data-toggle="collapse"
                        data-target="#collapseDeleteCategories" aria-expanded="true" aria-controls="collapseDeleteCategories">
                    Show / Hide
                </button>
                <button type="button" class="btn btn-danger disabled">Delete</button>
                /categories/delete/{userId}/
            </h2>
        </div>

        <div id="collapseDeleteCategories" class="collapse collapsed" aria-labelledby="headingOne"
             data-parent="#accordionDelete">
            <div class="card-body">
                <h3>Implementation Notes</h3>
                <p>
                    To delete a specific Category
                </p>
                <h3>
                    Response Class (Status 200)
                </h3>
                <p>Successful response</p>
                <code>
                    The data was deleted with success !
                </code>
            </div>
        </div>
    </div>
</div>