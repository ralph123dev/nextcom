# Modifications apportées au projet NextCom

Ce document liste toutes les modifications réalisées sur les fichiers du projet :

---

## Contact.tsx

- Tous les numéros de téléphone affichés ont été remplacés par : `+237 676 19 30 85`.
- Les boutons "Support technique urgent", "Appel d'urgence" et "Contacter ce bureau" lancent un appel direct vers le numéro affiché.
- La section "Carte Interactive" affiche désormais une carte Google Maps intégrée avec la position du siège à Dakar.

---

## About.tsx

- Dans la section équipe :
  - Pour "Mr. Paolo kk" : affichage de l'image `me.png` (dossier public), nom changé en "Ralph Foppa", rôle changé en "Développeur FullStack", expertise changée en "Informaticien et developpeur depuis plus de 4 ans", description remplacée par les logos Facebook, Instagram et YouTube (Bootstrap Icons).
  - Pour "Ing. Fatou NDIAYE" : nom changé en "Notre équipe d'expert", expertise changée en "Un peu plus sur nos experts techniciens", image remplacée par `people.png`.
  - Pour "M. Ousmane KANE" : nom changé en "Paolo", rôle changé en "DG", expertise changée en "CEO de NextCom", description remplacée par "pilier pour l'afrique", image remplacée par `pdg.png`.

---

## Energy.tsx

- La valeur "-50T CO₂ évité/an" est remplacée par les coordonnées réelles de Dakar récupérées via l'API gratuite wttr.in (aucune clé API nécessaire).

---

## Telecoms.tsx

- Ajout d'une animation de compteur pour les valeurs 99.9%, 1Gb/s, 500+, 24/7 dans la section Hero, avec une transition plus lente et fluide.

---

## Technology.tsx

- Ajout d'une animation de déplacement pour les éléments de liste "features" de chaque service. Chaque élément peut permuter sa place avec le suivant via un bouton, avec une animation visuelle.

---

**Toutes les modifications respectent la structure et le style du projet NextCom.**
