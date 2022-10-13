<?php

namespace App\Repositories;

use App\Models\Rota;

// use JasonGuru\LaravelMakeRepository\Repository\BaseRepository;
//use Your Model

/**
 * Class RotaRepository.
 */
class RotaRepository
{
    protected $rota;
    public function __construct(Rota $rota)
    {
        $this->rota = $rota;
    }


    public function rota()
    {
        return Rota::class;
    }
    public function getAll()
    {
        return $this->rota
            ->get();
    }

    /**
     * Get rota by id
     *
     * @param $id
     * @return mixed
     */
    public function getById($id)
    {
        return $this->rota
            ->where('id', $id)
            ->get();
    }

    public function save($data)
    {
        $rota = new $this->rota;

        $rota->nome_rota = $data['nome_rota'];
        $rota->projecto_id = $data['projecto_id'];
        $rota->tipoRota = $data['tipoRota'];
        $rota->endereco = $data['endereco'];
        $rota->distancia_km = $data['distancia_km'];

        $rota->save();

        return $rota->fresh();
    }


    function updateRota($data, $id){
       $rota = $this->rota->where('id',$id)->first();

        $rota->nome_rota = $data['nome_rota'];
        $rota->projecto_id = $data['projecto_id'];
        $rota->tipoRota = $data['tipoRota'];
        $rota->endereco = $data['endereco'];
        $rota->distancia_km = $data['distancia_km'];
        $rota->update();

        return $rota;
    }
}
