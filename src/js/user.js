export default function showSpecialAttack({ special }) {
  const attackVariant = [];

  special.forEach((elem) => {
    const { id, name, icon, description = 'Описание недоступно' } = elem;
    attackVariant.push({ id, name, icon, description });
  });

  return attackVariant;
}