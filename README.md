# UploadImage

Bonjour j'ai choisi d'utiliser **nodeJS** et **expressJS** pour construire un début d'API, j'ai inclus un **mongodb** que j'ai connecter mais pas utiliser ainsi qu'un service pour avoir accès à **mongo**.
J'ai utiliser **multer** pour la partie d'upload d'image et **sharp** pour la partie d'optimisation.
En essayant au maximum de me rapprocher d'une structure component https://github.com/goldbergyoni/nodebestpractices
Avec comme couche
Route->Middleware->Controller->Service
Force:
* Début d'application cohérente
* Structure totalement adaptable
* Services via docker
* Pensé au futur de l'application

Faiblesse:
* Pas finis
* Image en base 64 ?
* Pas d'utilisation de buffer peut-être plus adapté ?

Futur :
* Utilisation des models
* Finition
* Ajout de plusieurs images en même temps ?
* Optimisation de plusieurs images ?
* Optimiser l'espace de stockage ?
