<?php
namespace App\Interfaces;

interface ViaturaAlocadaInterface {

    public function getAllAlocated($data);

    public function EditViaturaHistory($id, array $newDetails);

    public function ViewViaturaAlocada($viaturaId);
}
