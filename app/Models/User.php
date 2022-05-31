<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Permission\Models\Permission;
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

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

    protected $fillable = [
        'name',
        'email',
        'person_id',
        'departamento_id',
        'password',
    ];

    public function getAllPermissionsAttribute() {
        $permissions = [];
          foreach (Permission::all() as $permission) {
            if (auth()->user()->can($permission->name)) {
              $permissions[] = $permission->name;
            }
          }
          return $permissions;
      }
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
