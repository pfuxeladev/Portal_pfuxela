<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Ordem de abastecimento</title>
    <style>
        body {
            background: rgb(204, 204, 204);
            display: flex;
            justify-content: center;
            font-family: Arial, Helvetica, sans-serif;
        }

        page {
            background: white;
            display: block;
            margin: 0 auto;
            margin-bottom: 0.5cm;
            box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
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

            html,
            body,
            page {
                margin: 0;
                box-shadow: 0;
                width: 210mm;
                height: 297mm;
            }
        }
        table {
            width: 100%;
            border-collapse: collapse;
          }

          table tr td {
            padding: 0;
          }

          table tr td:last-child {
            text-align: right;
          }

          .bold {
            font-weight: bold;
          }

          .right {
            text-align: right;
          }

          .large {
            font-size: 1.75em;
          }

          .total {
            font-weight: bold;
            color: #fb7578;
          }

          .logo-container {
            margin: 20px 0 70px 0;
          }

          .invoice-info-container {
            font-size: 0.875em;
          }
          .invoice-info-container td {
            padding: 4px 0;
          }

          .client-name {
            font-size: 1.5em;
            vertical-align: top;
          }

          .line-items-container {
            margin: 70px 0;
            font-size: 0.875em;
          }

          .line-items-container th {
            text-align: left;
            color: #999;
            border-bottom: 2px solid #ddd;
            padding: 10px 0 15px 0;
            font-size: 0.75em;
            text-transform: uppercase;
          }

          .line-items-container th:last-child {
            text-align: right;
          }

          .line-items-container td {
            padding: 15px 0;
          }

          .line-items-container tbody tr:first-child td {
            padding-top: 25px;
          }

          .line-items-container.has-bottom-border tbody tr:last-child td {
            padding-bottom: 25px;
            border-bottom: 2px solid #ddd;
          }

          .line-items-container.has-bottom-border {
            margin-bottom: 0;
          }

          .line-items-container th.heading-quantity {
            width: 50px;
          }
          .line-items-container th.heading-price {
            text-align: right;
            width: 100px;
          }
          .line-items-container th.heading-subtotal {
            width: 100px;
          }

          .payment-info {
            width: 38%;
            font-size: 0.75em;
            line-height: 1.5;
          }

          .footer {
            margin-top: 100px;
          }

          .footer-thanks {
            font-size: 1.125em;
          }

          .footer-thanks img {
            display: inline-block;
            position: relative;
            top: 1px;
            width: 16px;
            margin-right: 4px;
          }

          .footer-info {
            float: right;
            margin-top: 5px;
            font-size: 0.75em;
            color: #ccc;
          }

          .footer-info span {
            padding: 0 5px;
            color: black;
          }

          .footer-info span:last-child {
            padding-right: 0;
          }

          .page-container {
            display: none;
          }
          /*pdf render*/
          .footer {
            margin-top: 100px;
          }

          .footer-info {
            float: none;
            position: running(footer);
            margin-top: -25px;
          }

          .page-container {
            display: block;
            position: running(pageContainer);
            margin-top: -25px;
            font-size: 12px;
            text-align: right;
            color: #999;
          }

          .page-container .page::after {
            content: counter(page);
          }

          .page-container .pages::after {
            content: counter(pages);
          }


          @page {
            @bottom-right {
              content: element(pageContainer);
            }
            @bottom-left {
              content: element(footer);
            }
          }
    </style>
</head>

<body>
    <page class="page" size="A4">
        <div style="width: 98%; margin-left:5px; margin-right:5px;">
            <div class="logo-container">
                <img style="height: 100px" src="data:image/png;base64,{{ base64_encode(file_get_contents(public_path('/images/logo.png'))) }}">
            </div>

            <table class="invoice-info-container">
                <tr>
                    <td rowspan="2" class="client-name">
                        Client Name
                    </td>
                    <td>
                        Anvil Co
                    </td>
                </tr>
                <tr>
                    <td>
                        123 Main Street
                    </td>
                </tr>
                <tr>
                    <td>
                        Invoice Date: <strong>May 24th, 2024</strong>
                    </td>
                    <td>
                        San Francisco CA, 94103
                    </td>
                </tr>
                <tr>
                    <td>
                        Invoice No: <strong>12345</strong>
                    </td>
                    <td>
                        hello@useanvil.com
                    </td>
                </tr>
            </table>


            <table class="line-items-container">
                <thead>
                    <tr>
                        <th class="heading-quantity">Qty</th>
                        <th class="heading-description">Description</th>
                        <th class="heading-price">Price</th>
                        <th class="heading-subtotal">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2</td>
                        <td>Blue large widgets</td>
                        <td class="right">$15.00</td>
                        <td class="bold">$30.00</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Green medium widgets</td>
                        <td class="right">$10.00</td>
                        <td class="bold">$40.00</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Red small widgets with logo</td>
                        <td class="right">$7.00</td>
                        <td class="bold">$35.00</td>
                    </tr>
                </tbody>
            </table>


            <table class="line-items-container has-bottom-border">
                <thead>
                    <tr>
                        <th>Payment Info</th>
                        <th>Due By</th>
                        <th>Total Due</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="payment-info">
                            <div>
                                Account No: <strong>123567744</strong>
                            </div>
                            <div>
                                Routing No: <strong>120000547</strong>
                            </div>
                        </td>
                        <td class="large">May 30th, 2024</td>
                        <td class="large total">$105.00</td>
                    </tr>
                </tbody>
            </table>

            <div class="footer">
                <div class="footer-info">
                    <span>hello@useanvil.com</span> |
                    <span>555 444 6666</span> |
                    <span>useanvil.com</span>
                </div>
            </div>
        </div>
    </page>
</body>

</html>
