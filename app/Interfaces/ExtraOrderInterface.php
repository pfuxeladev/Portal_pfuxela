<?php
namespace App\Interfaces;

interface ExtraOrderInterface{

    public function ListAll();

    public function CreateOrder(array $orderRequest);

    public function insertAbastecimento($order, $uuid, array $orderRequest, $viatura);


    public function viewExternalOrder($order_id);

    public function ApproveOrder($order_id);

    public function SendOrder($order);
}
