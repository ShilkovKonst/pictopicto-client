import images from "@/_constants/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginForm = () => {
  return (
    <div
      className="flex justify-center z-10 relative items-center h-full w-full md:w-2/5 bg-[#e5e9ec] overflow-hidden shadow-outset-4/10"
      id="connexion switch-cnt"
    >
      <div
        className="flex justify-between items-center flex-col w-full h-full p-4 md:p-8 lg:p-12"
        id="switch-c1"
      >
        <Image
          src={images.logo}
          alt="LogoEcam.png"
          width={140}
          className="z-10 "
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-loose text-[#181818] md:mb-4">
          Connexion
        </h2>
        {/* {% if app.user %} 
        <div className="z-10 mb-3 text-center">
          Vous êtes vous connecté(e) en tant que
          <a
            href="{{ path('therapist_index') }}"
            className="font-semibold cursor-pointer underline hover:text-pred transition duration-150"
          ></a>
          <form action="{{ path('app_logout') }}" method="get">
            <button className="z-10 btn-b" type="submit">
              Déconnecter
            </button>
          </form>
        </div>
        {% endif %} */}

        <form
        //   action="{{ path('app_login') }}"
        //   method="post"
          className="flex flex-col w-full h-full"
        >
          {/* {% if error %} */}
          <div className="alert rounded-lg alert-danger"></div>
          {/* {% endif %} */}

          {/* {% if app.user == null %} */}
          <div className=" z-50">
            <input
              type="email"
              value="{{ last_username }}"
              name="_username"
              id="username"
              className="input-text md:mb-4"
              autocomplete="email"
              placeholder="Email"
              required
              autofocus
            />
            <input
              type="password"
              name="_password"
              id="password"
              className="input-text md:mb-4"
              autocomplete="current-password"
              required
              placeholder="Mot de passe"
            />
            <input
              type="hidden"
              name="_csrf_token"
              value="{{ csrf_token('authenticate') }}"
            />
          </div>

          <div className="flex flex-col items-center justify-between w-full h-full">
            <a className="z-10 cursor-pointer underline text-sm leading-loose font-bold hover:text-pred transition duration-150">
              Mot de passe oublié ?
            </a>
            {/* <button className="z-10 btn-b" type="submit">
              Se connecter
            </button> */}
            <Link href="/dashboard" className="z-10 btn-b flex justify-center items-center" type="submit">
              Se connecter
            </Link>
          </div>
        </form>
        {/* {% endif %} */}
        <p className="z-10 absolute bottom-0 md:bottom-3 text-sm mx-auto h-11 leading-loose font-bold">
          Pas encore de compte ?
          <a
            href="{{ path('app_register') }}"
            className="cursor-pointer underline hover:text-pred transition duration-150 ml-2"
          >
            S&apos;inscrire
          </a>
        </p>
      </div>
      <div className="switch__circle absolute w-96 h-96 rounded-full -bottom-1/2 -left-1/2 shadow-inset-8/12"></div>
      <div className="switch__circle switch__circle--t absolute w-96 h-96 rounded-full -top-1/3 left-3/4 shadow-inset-8/12"></div>
    </div>
  );
};

export default LoginForm;
