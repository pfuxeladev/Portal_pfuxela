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
        body {
        background: rgb(204,204,204);
      }
      page {
        background: white;
        display: block;
        margin: 0 auto;
        margin-bottom: 0.5cm;
        box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
      }
      page[size="A4"] {
        width: 21cm;
        height: 29.7cm;
      }
      .page {
        display: inline-block;
        position: relative;
        height: 297mm;
        width: 210mm;
        font-size: 12pt;
        margin: 2em auto;
        padding: calc(var(--bleeding) + var(--margin));
        box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
        background: white;
      }

      @media screen {
        .page::after {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          width: calc(100% - var(--bleeding) * 2);
          height: calc(100% - var(--bleeding) * 2);
          margin: var(--bleeding);
          outline: thin dashed black;
          pointer-events: none;
          z-index: 9999;
        }
      }
      @page {
        size: A4;
        margin: 0;
      }

      @media print {
        .page {
          margin: 0;
          overflow: hidden;
        }
      }
      @media print {
        html, body, page {
          margin: 0;
          box-shadow: 0;
          width: 210mm;
          height: 297mm;
        }
      }
    </style>
</head>

<body>
    <page class="page" size="A4">

    </page>
</body>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</html>
