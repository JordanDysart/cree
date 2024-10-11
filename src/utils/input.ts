import inquirer from 'inquirer';

export async function input(message: string): Promise<string> {
  const { value } = await inquirer.prompt({
    type: 'input',
    name: 'value',
    message,
  });

  return value;
}

export async function confirm(message: string): Promise<boolean> {
  const { value } = await inquirer.prompt({
    type: 'confirm',
    name: 'value',
    message,
  });

  return value;
}

export async function select(message: string, choices: string[]): Promise<string> {
  const { value } = await inquirer.prompt({
    type: 'list',
    name: 'value',
    message,
    choices,
  });

  return value;
}

export async function multiSelect(message: string, choices: string[]): Promise<string[]> {
  const { value } = await inquirer.prompt({
    type: 'checkbox',
    name: 'value',
    message,
    choices,
  });

  return value;
}

export async function password(message: string): Promise<string> {
  const { value } = await inquirer.prompt({
    type: 'password',
    name: 'value',
    message,
  });

  return value;
}


export async function question(message: string): Promise<boolean> {
  const { value } = await inquirer.prompt({
    type: 'confirm',
    name: 'value',
    message,
  });

  return value;
}

