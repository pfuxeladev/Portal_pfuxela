<?php
namespace App\Interfaces;

interface ViaturaAlocadaInterface {

    public function getAllAlocated($data);

    public function EditViaturaHistory(array $newDetails, $id);


    public function ViewViaturaAlocada($viaturaId);
}
