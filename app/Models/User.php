<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Permission\Models\Permission;
<<<<<<< HEAD
use Illuminate\Support\Facades\Auth;
use App\Permissions\HasPermissionsTrait;
use LaravelAndVueJS\Traits\LaravelPermissionToVueJS;
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles, HasPermissionsTrait;
    use LaravelPermissionToVueJS;

=======
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033

    public function departamento(){
        return $this->belongsTo(Departamento::class, 'departamento_id', 'id');
    }
    public function person(){
        return $this->belongsTo(Person::class);
    }

    public function viatura(){
        return $this->hasMany(Viatura::class, 'createdBy', 'id');
    }

    public function ordem(){
        return $this->hasMany(Ordem::class, 'createdBy', 'id');
    }
    public function bomba(){
        return $this->hasMany(Bombas::class, 'createdBy', 'id');
    }

<<<<<<< HEAD
    public function abastecimento(){
        return $this->hasMany(abastecimento::class);
    }

    public function jsPermissions()
    {
        return json_encode([
                'roles' => $this->getRoleNames(),
                'permissions' => $this->getAllPermissions()->pluck('name'),
            ]);
    }

=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    protected $fillable = [
        'name',
        'email',
        'person_id',
        'departamento_id',
        'password',
    ];
<<<<<<< HEAD
    // protected $appends = ['all_permissions','can'];

    // public function getAllPermissionsAttribute() {
    //     $permissions = [];
    //       foreach (Permission::all() as $permission) {
    //         if (auth()->user()->can($permission->name)) {
    //           $permissions[] = $permission->name;
    //         }
    //       }
    //       return $permissions;
    //   }
=======

    public function getAllPermissionsAttribute() {
        $permissions = [];
          foreach (Permission::all() as $permission) {
            if (auth()->user()->can($permission->name)) {
              $permissions[] = $permission->name;
            }
          }
          return $permissions;
      }
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    protected $hidden = [
        'password',
        'remember_token',
    ];

<<<<<<< HEAD


=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
