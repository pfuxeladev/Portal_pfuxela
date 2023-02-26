<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="user" content="Auth::user()">
    <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

    <title>PORTAL PFUXELA .lda</title>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Splash Screen/Loader Styles -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/loader.css') }}" />

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('images/logo/favicon.png') }}">

    <!-- Font -->
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
        rel="stylesheet">
    <script type="text/javascript">
        window.Laravel = {
            csrfToken: "{{ csrf_token() }}",
            jsPermissions: {!! auth()->check()?auth()->user()->jsPermissions():null !!}
        }
    </script>
</head>

<body>
    <noscript>
        <strong>We're sorry but Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template doesn't work properly without
            JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="loading-bg">
        <div class="loading-logo">
            <img src="{{ asset('logo.png') }}" alt="Logo" />
        </div>
        <div class="loading">
            <div class="effect-1 effects"></div>
            <div class="effect-2 effects"></div>
            <div class="effect-3 effects"></div>
        </div>
    </div>
    <div id="app">
    </div>

    <script src="{{ asset(mix('js/app.js')) }}"></script>

</body>

</html>
