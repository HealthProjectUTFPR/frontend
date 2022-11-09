<template>
  <div>
    <div class=" my-2 flex w-full items-center justify-end">
      <span class=" mr-1 font-sans text-xs">Aluno </span>
      <div class=" mr-1 h-8 w-8">
        <img src="/images/user.png" class=" rounded-full object-cover"/>
      </div>
    </div>
    <div class=" h-5 w-full bg-gray-700 text-center">
      <span class=" font-sans text-xs font-bold text-white">Informações do Aluno</span>
    </div>
    <div class="mt-5 flex items-center justify-center gap-3">
      <div class="mb-2 flex flex-row">
          <div><img src="/images/user.png" class=" rounded-full object-cover" height="70" width="70"/></div>
          <div class="mb-2 flex flex-col"><span><b>Nome:</b> Mario Andrade</span>
            <span><b><b></b>Idade:</b> 56</span></div>
      </div>
      <span class="font-sans text-sm font-bold leading-5 pr-6 pb-6"></span>
    </div>
    <div class=" mx-auto mt-16 h-57 w-7/12 shadow-2xl md: w-7/12 lg:7/12">
      <div class=" mb-10 h-7 w-full bg-gray-700">
          <div class="mb-2 flex flex-row">
              <div class="w-2/4">
                  <div class="text-center">
                      <span class="font-sans text-xs font-bold text-white">Data de nascimento</span>
                  </div>
                    <div class=" mr-3 flex items-center justify-between">
                      <span class="w-full my-1 ml-3 block font-sans text-xs font-medium leading-5 text-center">03/12/1940</span> 
                  </div>
              </div>
              <div class="w-2/4">
                  <div class="text-center">
                      <span class="font-sans text-xs font-bold text-white">Endereço</span>
                  </div>
                    <div class=" mr-3 flex items-center justify-between">
                      <span class="w-full my-1 ml-3 block font-sans text-xs font-medium leading-5 text-center">Av. Carlos Gomes, 755, apto 604</span> 
                  </div>
              </div>
          </div>
      </div>

      <div class=" mb-10 h-7 w-full bg-gray-700">
          <div class="mb-2 flex flex-row">
            <div class="w-2/4">
                  <div class="text-center">
                      <span class=" font-sans text-xs font-bold text-white">Contato</span>
                  </div>
                    <div class=" mr-3 flex items-center justify-between">
                      <span class="w-full my-1 ml-3 block font-sans text-xs font-medium leading-5 text-center">(44) 00000-0000</span> 
                  </div>
              </div>
              <div class="w-2/4">
                  <div class="text-center">
                      <span class="font-sans text-xs font-bold text-white">Contato de emergência</span>
                  </div>
                    <div class=" mr-3 flex items-center justify-between">
                      <span class="w-full my-1 ml-3 block font-sans text-xs font-medium leading-5 text-center">(51) 99275-4561 Márcia (filha)</span> 
                  </div>
              </div>
          </div>
      </div>

      <div class=" mb-10 h-5 w-full bg-gray-700">
          <div class="mb-2 flex flex-row">
              <div class="w-2/4">
                  <div class="text-center">
                      <span class=" font-sans text-xs font-bold text-white">Peso</span>
                  </div>
                    <div class=" mr-3 flex items-center justify-between">
                      <span class="w-full my-1 ml-3 block font-sans text-xs font-medium leading-5 text-center">53 Kg</span> 
                  </div>
              </div>
              <div style="width: 50%">
                  <div class="text-center">
                      <span class=" font-sans text-xs font-bold text-white">Estatura</span>
                  </div>
                    <div class="w-full mr-3 flex items-center justify-between text-center">
                      <span class="w-full my-1 ml-3 block font-sans text-xs font-medium leading-5 text-center">1,62m</span> 
                  </div>
              </div>
          </div>
      </div>

      <div class=" mb-10 h-5 w-full bg-gray-700">
          <div class="mb-2 flex flex-row">
            <div class="w-2/4">
                  <div class="text-center">
                      <span class=" font-sans text-xs font-bold text-white">Raça</span>
                  </div>
                    <div class=" mr-3 flex items-center justify-between">
                      <span class="w-full my-1 ml-3 block font-sans text-xs font-medium leading-5 text-center">Negra</span> 
                  </div>
              </div>
              <div class="w-2/4">
                  <div class="text-center">
                      <span class=" font-sans text-xs font-bold text-white">Sexo</span>
                  </div>
                    <div class=" mr-3 flex items-center justify-between">
                      <span class=" w-full my-1 ml-3 block font-sans text-xs font-medium leading-5 text-center">Masculino</span> 
                  </div>
              </div>
          </div>
      </div>

      <div class=" mb-10 h-5 w-full bg-gray-700">
          <div class="mb-2 flex flex-row">
            <div class="w-2/4">
                  <div class="text-center">
                      <span class=" font-sans text-xs font-bold text-white">IMC</span>
                  </div>
                    <div class=" mr-3 flex items-center justify-between">
                      <span class=" w-full my-1 ml-3 block font-sans text-xs font-medium leading-5 text-center">20,2 Kg/m^2</span> 
                  </div>
              </div>
              <div class="w-2/4">
                  <div class="text-center">
                      <span class=" font-sans text-xs font-bold text-white">Plano de saúde</span>
                  </div>
                    <div class=" mr-3 flex items-center justify-between">
                      <span class="w-full my-1 ml-3 block font-sans text-xs font-medium leading-5 text-center">Unimed</span> 
                  </div>
              </div>
          </div>
      </div>

      <div class=" mb-10 h-5 w-full bg-gray-700">
          <div class="mb-2 flex flex-row">
            <div class="w-full">
                  <div class="text-center">
                      <span class=" font-sans text-xs font-bold text-white">Observações</span>
                  </div>
                    <div class=" mr-3 flex items-center justify-between">
                      <span class="w-full my-1 ml-3 block font-sans text-xs font-medium leading-5">Descrição...</span> 
                  </div>
              </div>
          </div>
      </div>

      
      <div class="flex justify-end pr-2 pb-2">
  
          <el-button type="primary" icon="el-icon-edit-outline" circle size="medium" ></el-button>

      </div>
              

      

      
       <!-- <div class=" mb-10 h-5 w-full bg-gray-700">
        <div class="text-center">
          <span class=" font-sans text-xs font-bold text-white">E-mail</span>
        </div>
        <div class=" mr-3 flex items-center justify-between">
          <span class=" my-1 ml-3 block font-sans text-xs font-medium leading-5"></span>
          <el-button type="primary" icon="el-icon-edit-outline" circle size="mini" ></el-button>
          <div  class="absolute inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden">
            <div class=" relative m-auto">
              <div class=" h-72 w-80 rounded bg-white">
                <div class=" mt-5 text-center">
                  <span class=" text-base font-bold">Editar Email</span>
                </div>
                <el-form ref="modalEmailForm" >
                  <div class=" mx-3 mt-3 mb-2">
                    <el-form-item prop="inputNewEmail">
                      <el-input type="email" placeholder="Novo Email"></el-input>
                    </el-form-item>
                  </div>
                  <div class=" mx-3 mb-2">
                    <el-form-item prop="inputConfirmEmail">
                      <el-input  type="email" placeholder="Confirmar E-mail"></el-input>
                    </el-form-item>
                  </div>
                  <div class="mx-3">
                    <el-form-item prop="inputOldPassword">
                      <el-input  placeholder="Senha Atual" show-password></el-input>
                    </el-form-item>
                  </div>
                </el-form>
                <div class="mx-3 mt-10 flex justify-between">
                  <el-button type="danger" >Cancelar</el-button>
                  <el-button type="success" >Confirmar</el-button>
                </div>
              </div>
            </div>
          </div>
          <div  class=" absolute inset-0 z-40 bg-black opacity-25"></div>
        </div>
      </div> --> 


      
       <!-- <div class=" mb-10 h-5 w-full bg-gray-700">
        <div class="text-center">
          <span class=" font-sans text-xs font-bold text-white">Senha</span>
        </div>
        <div class=" mr-3 flex items-center justify-between">
          <span class=" my-1 ml-3 block font-sans text-xs font-medium leading-5">********</span>
          <el-button type="primary" icon="el-icon-edit-outline" circle size="mini" ></el-button>
          <div  class="absolute inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden">
            <div class=" relative m-auto">
              <div class=" h-56 w-80 rounded bg-white">
                <div class=" mt-5 text-center">
                  <span class=" text-base font-bold">Editar Senha</span>
                </div>
                <el-form ref="modalPasswordForm">
                  <div class=" mx-3 mt-3 mb-2">
                    <el-form-item prop="inputOldPassword">
                      <el-input placeholder="Senha Atual" show-password></el-input>
                    </el-form-item>
                  </div>
                  <div class="mx-3">
                    <el-form-item prop="inputNewPassword">
                      <el-input  placeholder="Nova Senha" show-password></el-input>
                    </el-form-item>
                  </div>
                </el-form>
                  <div class="mx-3 mt-11 flex justify-between">
                  <el-button type="danger" >Cancelar</el-button>
                  <el-button type="success" >Confirmar</el-button>
                </div>
              </div>
            </div>
          </div>
          <div  class=" absolute inset-0 z-40 bg-black opacity-25"></div>
        </div>
      </div> -->
      

     </div>
   
     <div class=" absolute left-0 bottom-0 h-14 w-full bg-gray-700">
      <div class=" mx-8 my-2 flex items-center justify-between">
        <div>
          <i class="el-icon-user mx-5 text-2xl text-white"></i>
          <span class=" flex text-xs text-white">Meus Alunos</span>
        </div>
        <div>
          <i class="el-icon-date mx-8 text-2xl text-white"></i>
          <span class=" flex text-xs text-white">Meu Calendario</span>
        </div>
        <div>
          <i class="el-icon-user mx-5 text-2xl text-white"></i>
          <span class=" flex text-xs text-white">Meus Dados</span>
        </div>
        <div>
          <i class="el-icon-headset mx-2 text-2xl text-white"></i>
          <span class=" flex text-xs text-white">Suporte</span>
        </div>
      </div> 
    </div>
  </div>  
</template>


