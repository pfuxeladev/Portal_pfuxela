<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Relatorio</title>
    <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">
    <style type="text/css">
        div.container {
            width: 100%;
            background-color: white;
            position: relative;
            /*float: left;*/
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            z-index: 1;
        }

        div.container>.content-header {
            width: 100%;
            display: inline-flex;
            /*text-align: center;*/
            background-color: rgb(85, 55, 55);
            border-radius: 4px;
            z-index: 1;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            padding: 2px;
            margin-top: -5px;
        }

        div.container>div.content>.side-company {
            width: 100%;
            max-width: 300px;
            display: block;
            position: relative;
            float: left;
            margin-top: 23px;
        }

        div.container>div.content>.logotipo {
            margin-top: 25px;
            float: right;
            width: 200px;
            position: relative;
        }

        div.container>div.content>.side-company>ul.list-unstyled {
            list-style: none;
            display: block;
        }

        div.container>div.content>.side-company>ul.list-unstyled>li {
            margin-bottom: 5px;
            display: block;
        }

        div.container>div.content {
            width: 100%;
            display: inline;
            margin-top: 5px;
            position: relative;
            float: left;
        }

        table.table-content {
            width: 100%;
            text-align: justify;
            height: 100vh;
            border-collapse: collapse;
        }

        table.table-content td,
        table.table-content th {
            border: 0.1px solid rgb(120, 119, 119);
            padding: 2px;
        }

        table.table-content tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        .row-data {
            width: 100%;
            margin-top: 180px;
            margin-right: 10px;
            position: relative;
            font-size: 10pt;
            height: auto;

        }
    </style>
</head>

<body style="font-family: sans-serif;">
    <div class="container">
        <div class="content-header">
            <h3 class="centered-title"
                style="text-align: center !important; color: whitesmoke; position: relative; width: 100%;">
                Pedido de Cancelamento da Ordem de abastecimento
            </h3>
        </div>
        <div class='card'>
            <img src="data:image/png;base64,{{ base64_encode(file_get_contents(public_path('/images/logo.png'))) }}"
                style="width:150px; margin-bottom:20px; margin-left:40px" alt="">

            <div class='card-header p-4'>

                <div style="margin-left: 20px">
                    <h3 class='mb-0 card-title'>ORDEM DE ABASTECIMENTO #
                        <b style='color:#eb691e;'>{{ $ordem->codigo_ordem }}</b>
                    </h3>
                    <hr>
                    <div>Data de Emissão: <b>{{ $ordem->updated_at->format('d/m/Y') }}</b></div>
                    <div>Hora da Emissão: <b>{{ $ordem->updated_at->format('h:i:s') }}</b></div>

                </div>
            </div>
            <div class='card-body' style="margin-left: 20px;">
                <div class='row ml-4 mb-3'>
                    <div class='col-sm-6'>

                        <h5 class='mb-1'>Da: <strong>Pfuxela Exhibitions Gallery<strong /></h5>
                        <div>Av. Paulo Samuel Kankomba</div>
                        <div>Maputo, Mozambique 1114</div>
                        <div>Email: info@pfuxela.co.mz</div>
                        <div>Phone: +258 84 1000 170</div>
                    </div>

                </div>
            </div>
            <div class='row ml-4 mb-3'>
                <div class='col-sm-6'>

                    <h3 class='mb-1'>Para: {{ $ordem->bombas->nome_bombas }}</h3>
                </div>

            </div><br>
            <p class="margin-left:20px">
                A <b><Pfuxela Exhibition Gallery/b> vem por esta meio fazer o pedido de cancelamento da ordem {{ $ordem->codigo_ordem }}
                que acidentalmente o enviou sem devida verificação do destinatario.
                Nossas Sincera desculpa pelo incoveniente.
            </p>
            <div class="card-footer" style="margin-left: 20px; margin-top:40px;">
                <div style="width:100%; display: block; float:left; position: relative;">
                    <p style="font-size: 14px; margin-top: 6px; margin-bottom: 20px;">
                        Gestor da Pfuxela
                        <br>
                        <hr style="float: left;" width="300">
                    </p>
                    <br>
                    <p style="font-size: 14px; margin-top: 6px; margin-bottom: 20px;">
                        Assinatura(Gestor da bomba)
                        <br>
                        <hr style="float: left;" width="300">
                    </p>
                    <br>
                    <p
                        style="font-size: 14px; margin-top: 6px; margin-bottom: 20px; float: left;">
                        <strong>Nota</strong>: A Pfuxela Exhibitions Gallery se
                        responsabiliza só e somente por abastecimentos enviados
                        automaticamente pelo sistema e mediante a
                        apresentação da cópia física devidamente assinada pelo gestor.
                    </p>
                </div>
            </div>
        </div>
</body>

</html>
