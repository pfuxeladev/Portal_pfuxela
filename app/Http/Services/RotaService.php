<?php

namespace App\Http\Services;

use App\Http\Requests\RotaRequest;
use App\Models\Rota;
use App\Repositories\RotaRepository;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use InvalidArgumentException;

class RotaService
{
    /**
     * @var $rotaRepository
     */
    protected $rotaRepository;

    /**
     * PostService constructor.
     *
     * @param PostRepository $rotaRepository
     */
    public function __construct(RotaRepository $rotaRepository)
    {
        $this->rotaRepository = $rotaRepository;
    }

    /**
     * Delete post by id.
     *
     * @param $id
     * @return String
     */
    public function deleteById($id)
    {
        DB::beginTransaction();

        try {
            $rota = $this->rotaRepository->delete($id);

        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());

            throw new InvalidArgumentException('Unable to delete post data');
        }

        DB::commit();

        return $rota;

    }

    /**
     * Get all post.
     *
     * @return String
     */
    public function getAll()
    {
        return $this->rotaRepository->getAll();
    }

    /**
     * Get post by id.
     *
     * @param $id
     * @return String
     */
    public function getById($id)
    {
        return $this->rotaRepository->getById($id);
    }

    /**
     * Update post data
     * Store to DB if there are no errors.
     *
     * @param array $data
     * @return String
     */
    public function UpdateRota($data, $id)
    {


        DB::beginTransaction();

        try {
            $rota = $this->rotaRepository->updateRota($data, $id);

        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());

            throw new InvalidArgumentException('Unable to update rota data');
        }

        DB::commit();

        return $rota;

    }

    /**
     * Validate post data.
     * Store to DB if there are no errors.
     *
     * @param array $data
     * @return String
     */
    public function saveRotaData($data)
    {
        $validator = Validator::make($data, [
            'title' => 'required',
            'description' => 'required'
        ]);

        if ($validator->fails()) {
            throw new InvalidArgumentException($validator->errors()->first());
        }

        $result = $this->rotaRepository->save($data);

        return $result;
    }

}

