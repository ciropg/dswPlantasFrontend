import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUsuarioRequest } from '../../model/usuario-request';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  titulo = 'Registro de Hierbas Medicinales';
  descripcion = 'Sistema para registrar y gestionar hierbas medicinales y sus propiedades';

 // Propiedades para los modales
  showModal = false;
  showLoginModal = false;

  // Formularios
  registerForm: FormGroup;
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder,private usuarioService: UsuarioService, private router: Router) {
    // Inicializar formulario de registro
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2)]],
      idRol: [2, Validators.required]
    });
     // Inicializar formulario de login
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
  openRegisterModal() {
    this.showModal = true;
  }
  closeRegisterModal() {
    this.showModal = false;
    this.registerForm.reset();
  }
  // Método de envío para registro 
  onSubmit() {
    if (this.registerForm.valid) {
      const formValue = this.registerForm.value;

      const nuevoUsuario: IUsuarioRequest = {
        nombreUsuario: formValue.username,
        correo: formValue.email,
        contrasena: formValue.password,
        idRol: formValue.idRol
      };

      this.usuarioService.registrarUsuario(nuevoUsuario).subscribe({
        next: (res) => {
          console.log('Usuario registrado:', res);
          alert('Usuario registrado con éxito');
          this.closeRegisterModal();
        },
        error: (err) => {
          console.error('Error al registrar:', err);
          alert(err?.error?.message || 'Error al registrar usuario');
        }
      });
    }
  }
  // Métodos para el modal de login
  openLoginModal() {
    this.showLoginModal = true;
  }
  
  closeLoginModal() {
    this.showLoginModal = false;
    this.loginForm.reset();
  } 
  onLoginSubmit() {
    if (this.loginForm.valid) {
      const credentials = {
        correo: this.loginForm.value.email,
        contrasena: this.loginForm.value.password
      };

      this.usuarioService.login(credentials).subscribe({
        next: (res) => {
          console.log('Login exitoso:', res);
          // Guardar los datos en localStorage
          localStorage.setItem('usuario', JSON.stringify(res));

          // Cerrar el modal
          this.closeLoginModal();

          // Redirigir al panel de cliente
          this.router.navigate(['/cliente']);
        },
        error: (err) => {
          console.error('Error de login:', err);
          alert(err?.error?.message || 'Credenciales incorrectas');
        }
      });
    }
  }

 
}
