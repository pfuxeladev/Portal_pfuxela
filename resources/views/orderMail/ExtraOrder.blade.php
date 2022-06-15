<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Ordem de abastecimento</title>
    <style>
        ul.list-unstyled{
            list-style: none;
            display: block;
            margin-left: 1em;
        }
        div.card{
            font-family: sans-serif;
            font-size: 12pt;
            margin: auto;
            box-sizing: border-box;
        }
        #row-header {
            display: inline-block;
            width: 100%;
            justify-content: space-between;
          }

          /* Responsive layout - makes a one column layout instead of a two-column layout */
          #flex-container{
            width: 100%;
            position: relative;
            height: auto;
            display: flex;
          }
          #columns, #columns1{
            float: left;
          }
          #columns1{
            margin-left: 67%;
            position: relative;
          }
    </style>
</head>

<body>
    <div class="card">
        <div class="card-body">
            <div class="container mb-5 mt-3">
                <div class="row d-flex align-items-baseline">
                    <div class="col-xl-9">
                        <h3 style="color: #7e8d9f;font-size: 20px; text-transform: uppercase;">ORDEM DE ABASTECIMENTO <strong>ID: #123-123</strong></h3>
                    </div>

                    <hr>
                </div>

                <div class="container">
                    <div class="col-md-12">
                        <div class="text-center">
                            <img src="{{$image}}"  style="width:200px; margin-left:0.5em">
                        </div>

                    </div>


                    <div class="row" id="row-header">
                        <div class="col-xl-8" id="columns">
                            <ul class="list-unstyled">
                                <li class="text-muted">Para: <span style="color:#5d9fc5 ;">QUICK LANE</span></li>
                                <li class="text-muted"><i class="fas fa-phone"></i> 258 84 10 10 201</li>
                            </ul>
                        </div>
                        <div class="col-xl-4" id="columns1">
                            <ul class="list-unstyled">
                                <li class="text-muted"><i class="fas fa-circle" style="color:#84B0CA ;"></i> <span
                                        class="fw-bold">ID:</span>#123-456</li>
                                <li class="text-muted"><i class="fas fa-circle" style="color:#84B0CA ;"></i> <span
                                        class="fw-bold">Data de emiss&atilde;o: </span>Jun 23,2021</li>
                                <li class="text-muted"><i class="fas fa-circle" style="color:#84B0CA ;"></i> <span
                                        class="me-1 fw-bold">Enviado por:</span><span
                                        class="badge text-black fw-bold">
                                        info@pfuxela.co.mz</span></li>
                            </ul>
                        </div>
                    </div>

                    <div class="row my-2 mx-1 justify-content-center">
                        <table class="table table-striped table-borderless" style="width: 100%">
                            <thead style="background-color:#909090 ;" class="text-white">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Viatura(matricula)</th>
                                    <th scope="col">Qtd</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Pro Package</td>
                                    <td>4</td>
                                    <td>$200</td>
                                    <td>$800</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <div class="row" id="flex-container">
                        <div class="col-xl-9 d-block float-right"></div>

                        <div class="col-xl-3 d-block float-right" style="align:right">
                            <ul class="list-unstyled">
                                <li class="text-muted ms-3"><span class="text-black me-4">SubTotal</span>$1110</li>
                                <li class="text-muted ms-3 mt-2"><span class="text-black me-4">Total</span>$111</li>
                            </ul>
                            <br>

                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-xl-10">
                            <p><b>Nota </b>A Pfuxela Exhibitions Gallery se responsabiliza só e somente por abastecimentos enviados automaticamente pelo sistema e mediante a
                                apresentação da cópia física devidamente assinada pelo gestor.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</body>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</html>
