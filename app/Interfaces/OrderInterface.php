<?php 

namespace App\Interfaces;

interface OrderInterface{
    public function OrderList();
    public function createOrder(array $OrderRequest);

    public function viewOrder($order_id);

    public function sendOrder($order_id);

    public function viewOrderReports();
}