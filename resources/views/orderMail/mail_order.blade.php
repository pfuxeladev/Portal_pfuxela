<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ordem de abastecimento</title>
    <link
        href="https://fonts.googleapis.com/css?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700"
        rel="stylesheet" media="screen">
    <style type="text/css">
        .hover-underline:hover {
            text-decoration: underline !important;
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        @keyframes ping {

            75%,
            100% {
                transform: scale(2);
                opacity: 0;
            }
        }

        @keyframes pulse {
            50% {
                opacity: .5;
            }
        }

        @keyframes bounce {

            0%,
            100% {
                transform: translateY(-25%);
                animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }

            50% {
                transform: none;
                animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
        }

        @media (max-width: 600px) {
            .sm-px-24 {
                padding-left: 14px !important;
                padding-right: 24px !important;
            }

            .sm-py-32 {
                padding-top: 32px !important;
                padding-bottom: 32px !important;
            }

            .sm-w-full {
                width: 100% !important;
            }
        }
           #table_viatura tr:nth-child(even) {
            background-color: #f2f2f2;
            border: 1px solid rgb(121, 121, 121);
          }
    </style>
</head>

<body style="margin: 0; padding: 0; width: 100%; word-break: break-word; -webkit-font-smoothing: antialiased;">
    <div role="article" aria-roledescription="email" aria-label="" lang="en">
        <table style="font-family: 'Segoe UI', sans-serif; width: 100%;" width="100%"
            cellpadding="0" cellspacing="0" role="presentation">
            <tr>
                <td align="center"
                    style="--bg-opacity: 1; background-color: #eceff1; background-color: rgba(236, 239, 241, var(--bg-opacity)); font-family:'Segoe UI', sans-serif;"
                    bgcolor="rgba(236, 239, 241, var(--bg-opacity))">
                    <table class="sm-w-full" style="font-family: Arial,sans-serif; width: 800px;"
                        width="800" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                            <td class="sm-py-32 sm-px-24"
                                style="font-family:'Segoe UI', sans-serif; padding: 48px; text-align: center;"
                                align="center">

                            </td>
                        </tr>
                        <tr>
                            <td align="center" class="sm-px-24"
                                style="font-family: Arial,sans-serif;">
                                <table style="font-family: Arial,sans-serif; width: 100%;" width="100%"
                                    cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                        <td class="sm-px-24"
                                            style="--bg-opacity: 1; background-color: #ffffff; background-color: rgba(255, 255, 255, var(--bg-opacity)); border-radius: 4px; font-family:'Segoe UI', sans-serif; font-size: 14px; line-height: 24px; padding: 48px; text-align: left; --text-opacity: 1; color: #626262; color: rgba(98, 98, 98, var(--text-opacity));"
                                            bgcolor="rgba(255, 255, 255, var(--bg-opacity))" align="left">
                                            <img src="{{asset('./images/pfuxelalogo.png')}}" style="width:150px; margin-bottom:20px;" alt="">

                                            <p style="margin: 0 0 24px; font-size: 14pt; text-transform: uppercase;">
                                                ORDEM DE ABASTECIMENTO #<?php echo $ordem->codigo_ordem; ?>
                                            </p>
                                            <table style="font-family: Arial,sans-serif; width: 100%;"
                                                width="100%" cellpadding="0" cellspacing="0" role="presentation">
                                                <tr>
                                                    <td
                                                        style="font-family: Arial,sans-serif; font-size: 14px; padding: 16px;">
                                                        <table
                                                            style="font-family: Arial,sans-serif; width: 100%;"
                                                            width="100%" cellpadding="0" cellspacing="0"
                                                            role="presentation">
                                                            <tr>
                                                                <td
                                                                    style="font-family: Arial,sans-serif; font-size: 14px;">
                                                                    <span>Data de emiss&atilde;o:</span> {{ $ordem->updated_at->format('d/m/Y') }}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style="font-family: Arial,sans-serif; font-size: 14px;">
                                                                    <span>Hora de emiss&atilde;o:</span> {{ $ordem->updated_at->format('h:i:s') }}
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <p style="margin-left: 16px; font-size: 12pt; text-transform: capitalize;">
                                                De: <strong> Pfuxela Exhibitions Gallery</strong>
                                            </p>
                                            <table style="font-family: Arial,sans-serif; width: 100%;"
                                                width="100%" cellpadding="0" cellspacing="0" role="presentation">
                                                <tr>
                                                    <td
                                                        style="font-family: Arial,sans-serif; font-size: 14px; padding: 16px;">
                                                        <table
                                                            style="font-family: Arial,sans-serif; width: 100%;"
                                                            width="100%" cellpadding="0" cellspacing="0"
                                                            role="presentation">
                                                            <tr>
                                                                <td
                                                                    style="font-family: Arial,sans-serif; font-size: 14px;">
                                                                    <span>Endere&ccedil;o:</span> Av. Paulo Samuel
                                                                    Kankomba
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style="font-family: Arial,sans-serif; font-size: 14px;">
                                                                    Maputo, Mozambique 1114

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style="font-family: Arial,sans-serif; font-size: 14px;">
                                                                    <span>Email:</span> info@pfuxela.co.mz
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style="font-family: Arial,sans-serif; font-size: 14px;">
                                                                    <span>Contacto:</span> +258 84 1000 170
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table
                                                style="font-family: Arial,sans-serif; width: 100%; margin-right: 16px; margin-left: 16px;"
                                                width="100%" cellpadding="0" cellspacing="0" role="presentation">
                                                <tr>
                                                    <td style="font-family: Arial,sans-serif;">
                                                        <h3
                                                            style="font-weight: 600; font-size: 12px; margin-top: 0; text-align: left;">
                                                            Bombas: <span style="text-transform: uppercase">{{$ordem->bombas->nome_bombas}}</span></h3>
                                                    </td>
                                                    <td style="font-family: Arial,sans-serif;">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" style="font-family: Arial,sans-serif;">
                                                        <?php $total = 0; ?>
                                                        <table id="table_viatura"
                                                            style="font-family: Arial,sans-serif; width: 100%;"
                                                            width="100%" cellpadding="0" cellspacing="0"
                                                            role="presentation">
                                                            <tr>
                                                                <th style="padding-bottom: 2px;">
                                                                    <p>Matricula</p>
                                                                </th>
                                                                <th style="padding-bottom: 2px;">
                                                                    <p>Combustivel</p>
                                                                </th>
                                                                <th style="padding-bottom: 2px;">
                                                                    <p>Qtd</p>
                                                                </th>
                                                                <th style="padding-bottom: 2px;">
                                                                    <p>Pre&ccedil;o Unit</p>
                                                                </th>
                                                                <th style="padding-bottom: 2px;">
                                                                    <p>Subtotal</p>
                                                                </th>
                                                            </tr>
                                                            @foreach ($ordem->ordem_viatura as $ordViatura)
                                                            <tr>
                                                                <td>{{$ordViatura->viatura->matricula}}</td>
                                                                <td>{{$ordViatura->viatura->tipo_combustivel}}</td>
                                                                <td>{{$ordViatura->qtd_abastecida}}</td>
                                                                <td>{{($ordViatura->preco_cunsumo)/$ordViatura->qtd_abastecida}}</td>
                                                                <td>{{$ordViatura->preco_cunsumo}}</td>

                                                            </tr>
                                                            <?php $total += $ordViatura->preco_cunsumo; ?>
                                                            @endforeach
                                                            <tfoot>
                                                                <tr>
                                                                    <td colspan="3"></td>
                                                                    <th>Subtotal</th>
                                                                    <td>{{$total}}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="3"></td>
                                                                    <th>Total</th>
                                                                    <td>{{$total}}</td>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table align="center"
                                                style="font-family: Arial,sans-serif; margin-left: auto; margin-right: auto; text-align: center; width: 100%;"
                                                width="100%" cellpadding="0" cellspacing="0" role="presentation">
                                                <tr>
                                                    <td align="right"
                                                        style="font-family: Arial,sans-serif;">
                                                        <table
                                                            style="font-family: Arial,sans-serif; margin-top: 24px; margin-bottom: 24px;"
                                                            cellpadding="0" cellspacing="0" role="presentation">

                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <div style="width:100%; display: block; float:left; position: relative;">
                                                <p
                                                    style="font-size: 14px; line-height: 24px; margin-top: 6px; margin-bottom: 20px;">
                                                    Gestor da Pfuxela
                                                    <br>
                                                    <hr style="float: left;" width="300">
                                                </p>
                                                <br>
                                                <p
                                                    style="font-size: 14px; line-height: 24px; margin-top: 6px; margin-bottom: 20px;">
                                                    Assinatura(Gestor da bomba)
                                                    <br>
                                                    <hr style="float: left;" width="300">
                                                </p>
                                                <br>
                                                <p
                                                    style="font-size: 14px; line-height: 24px; margin-top: 6px; margin-bottom: 20px; float: left;">
                                                    <strong>Nota</strong>: A Pfuxela Exhibitions Gallery se
                                                    responsabiliza só e somente por abastecimentos enviados
                                                    automaticamente pelo sistema e mediante a
                                                    apresentação da cópia física devidamente assinada pelo gestor.
                                                </p>
                                            </div>


                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="font-family: Arial,sans-serif; height: 20px;" height="20"></td>
                        </tr>
                        <tr>
                            <td
                                style="font-family:'Segoe UI', sans-serif; font-size: 12px; padding-left: 48px; padding-right: 48px; --text-opacity: 1; color: #eceff1; color: rgba(236, 239, 241, var(--text-opacity));">


                            </td>
                        </tr>
                        <tr>
                            <td style="font-family: Arial,sans-serif; height: 16px;" height="16"></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
</body>

</html>
