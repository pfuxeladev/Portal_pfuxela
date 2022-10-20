<?php
namespace App\Interfaces;

interface ViaturaAlocadaInterface {

    public function getAllAlocated($data);

    function EditViaturaHistory($id, array $newDetails);

    function ViewViaturaAlocada($viaturaId);
}
