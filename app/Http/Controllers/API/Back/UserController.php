<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\Contactos;
use App\Models\Departamento;
use App\Models\Empresa;
use App\Models\EmpresaDepartamento;
use App\Models\Person;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
class UserController extends Controller
{
   private $user;

   function __construct(User $user)
   {
        $this->user = $user;
   }
    public function index(Request $request)
    {
        if($request->perPage){
            return $this->user->with(['departamento', 'person', 'roles'])->orderBy('id', 'desc')->paginate($request->perPage)->except(auth()->user()->id);
        }else if($request->q && $request->perPage){
            return $this->user->with(['departamento', 'person', 'roles'])->join('people', 'users.person_id', '=', 'people.id')->join('departamentos', 'users.departamento_id', '=', 'departamentos.id')
            ->where('users.name', 'like', '%'. $request->q . '%')
            ->orWhere('users.email', 'like', '%'.$request->q.'%')
            ->orWhere('people.nome_completo', 'like', '%'.$request.'%')->orderBy('id', 'desc')->paginate($request->perPage)->except(auth()->user()->id);
        }else if($request->q){
            return $this->user->with(['departamento', 'person', 'roles'])->join('people', 'users.person_id', '=', 'people.id')->join('departamentos', 'users.departamento_id', '=', 'departamentos.id')
            ->where('users.name', 'like', '%'. $request->q . '%')
            ->orWhere('users.email', 'like', '%'.$request->q.'%')
            ->orWhere('people.nome_completo', 'like', '%'.$request.'%')->orderBy('id', 'desc')->paginate(10)->except(auth()->user()->id);
        }else if($request->sortDesc == true){
            return $this->user->with(['departamento', 'person', 'roles'])->orderBy('id', 'asc')->paginate(10)->except(auth()->user()->id);
        }else{
            return $this->user->with(['departamento', 'person', 'roles'])->orderBy('id', 'desc')->paginate(10)->except(auth()->user()->id);
        }
    }

    public function permissionsIndex()
    {
        return Permission::all();
    }


    public function rolesIndex()
    {
        return Role::all();
    }



    public function rolesAddUser(Request $request, Role $role, User $user)
    {

        $user->assignRole($role);

        return response()->json([
            "message" => $role->name . " Funcao alocada ao utilizador!"
        ], 200);
    }


    public function rolesRemoveUser(Request $request, Role $role, User $user)
    {
        $user->removeRole($role);

        return response()->json([
            "message" => $role->name . " Utilizador revogado da funcao"
        ], 200);
    }


   function listEmpresas(){

       $empresa = Empresa::all();
      return Response::json($empresa, 200);
   }

   function listDepartamentos(){

        $department = Departamento::all();
       return Response::json($department, 200);
    }

    public function store(Request $request)
    {

        $this->validate($request, [
            'nome_completo'=>'required|string|min:3',
            'email'=>'required', 'string', 'email', 'max:255', 'unique:users',
            'username'=>'required|string|min:5',
            'departamento'=>'required|integer',
            'role'=>'required',
            'contacto'=>'required'
        ]);


        $password = $request->password;

        Log::info($password);

        $person = new Person();

        $contact = new Contactos();

        $departamento = Departamento::where('id', $request->departamento)->first();

        $role = Role::where('name', $request->role)->first();

        $person->nome_completo = $request->nome_completo;
        $person->cargo = $request->cargo;
        $person->empresa_id = $request->empresa;
        $person->save();


        if ($person) {

            $contact->content = $request->contacto;
            $contact->person_id = $person->id;
            $contact->save();

           $user = $this->user->create([
                'name'=>$request->username,
                'email'=>$request->email,
                'person_id'=>$person->id,
                'departamento_id'=>$departamento->id,
                'password'=>Hash::make($password),
            ]);
           $user->createToken('access_token')->accessToken;

            $user->assignRole($role);

            // Mail::mailer('accounts')->to($user)->send(new AccountCreated($mailData));

            return response()->json(['success'=>'utilizador criado']);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Response::json($this->user->with(['departamento', 'person', 'roles.permissions', 'permissions'])->findOrFail($id));
    }

   public function PermissionUser($id){
    $user = $this->user->findOrFail($id);
        $permission =  $user->getAllPermissions();
        return $permission;
   }
    public function update(Request $request, $id)
    {
     return $request->all();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
