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
            text-align: left;
            width: 40%;
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
            font-size: 1.1em;
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
    <?php setlocale(LC_MONETARY, 'MT'); ?>

    <page class="page" size="A4">
        <div style="width: 98%; margin-left:20px; margin-right:15px;">
            <div class="logo-container">
                <img style="height: 100px"
                    src="data:image/png;base64,{{ base64_encode(file_get_contents(public_path('/images/logo.png'))) }}">
            </div>
            <h3 class='mb-0 card-title'>ORDEM DE ABASTECIMENTO #
                <b style='color:#eb691e;'>{{ $abastecimento_bomba->ordem->codigo_ordem }}</b>
            </h3>
            <hr>
            <table class="invoice-info-container">
                <tr>
                    <td rowspan="2" class="client-name">
                        Bombas: {{ $abastecimento_bomba->bombas->nome_bombas }}
                    </td>
                    <td style="padding-bottom:4px">
                        Fornecedor: {{ $abastecimento_bomba->fornecedor }}
                    </td>
                </tr>
                <tr>
                    <td>
                        Contacto: {{ $abastecimento_bomba->fornecedor_contacto }}

                    </td>
                </tr>
                <tr>
                    <td>
                        Contacto: +258 84 1000 170
                    </td>
                    <td>
                        Data de Submiss&atilde;o: {{ $abastecimento_bomba->created_at->format('d/m/Y') }}
                    </td>
                </tr>
                <tr>
                    <td>
                        Ordem No: #<strong
                            style='color:#eb691e;'>{{ $abastecimento_bomba->ordem->codigo_ordem }}</strong>
                    </td>
                    <td>

                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="mailto:info@pfuxela.co.mz">info@pfuxela.co.mz</a>
                    </td>
                    <td>
                        {{-- <a href="mailto:info@pfuxela.co.mz">info@pfuxela.co.mz</a> --}}
                    </td>
                </tr>
            </table>


            <table class="line-items-container" style="margin-right:15px; width:95%">
                <thead>
                    <tr style="text-align: left;">
                        <th class="heading-description">Combustivel</th>
                        <th class="heading-quantity">Qtd</th>
                        <th class="heading-price">Pre&ccedil;o/ltr</th>
                        <th class="heading-subtotal">Subtotal (MZN)</th>
                    </tr>
                </thead>
                <tbody style="text-align: left">
                    <tr>
                        <td style="width:45%;">{{ $abastecimento_bomba->tipo_de_combustivel }}</td>
                        <td style="width:15%;">{{ $abastecimento_bomba->qtd_abastecida }}</td>
                        <td style="width:20%; text-align:right;"><?php echo number_format($abastecimento_bomba->preco_combustivel, 2, ',', '.'); ?></td>
                        <td style="width:20%; text-align:right;" class="bold"><?php echo number_format($abastecimento_bomba->qtd_abastecida * $abastecimento_bomba->preco_combustivel, 2, ',', '.'); ?></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3" style="text-align: right;">Total</td>
                        <td class="bold" style="text-align: right"><?php echo number_format($abastecimento_bomba->qtd_abastecida * $abastecimento_bomba->preco_combustivel, 2, ',', '.'); ?> </td>
                    </tr>
                </tfoot>
            </table>


            <table class="line-items-container has-bottom-border" style="width:95%">
                <tbody>
                    <tr>
                        <td style="width: 40%;">Gestor da Pfuxela</td>
                        <td style="width: 20%;">&nbsp;</td>
                        <td style="width: 40%;">Assinatura(Gestor da bomba)</td>
                    </tr>
                    <tr>
                        <td style="width: 40%;"><hr></td>
                        <td style="width: 20%;">&nbsp;</td>
                        <td style="width: 40%;"><hr></td>
                    </tr>
                </tbody>
            </table>

            <div class="footer">
                <div class="footer-info">
                    <p style="font-size: 14px; margin-top: 6px; margin-bottom: 20px; float: left;">
                        <strong>Nota</strong>: A Pfuxela Exhibitions Gallery se
                        responsabiliza só e somente por abastecimentos enviados
                        automaticamente pelo sistema e mediante a
                        apresentação da cópia física devidamente assinada pelo gestor.
                    </p>
                </div>
            </div>
        </div>
    </page>
</body>

</html>
