export class Producto{
  constructor(private _id: number, private _nombre:string, private _precio:number, private _unidadesDisponibles: number, private _imagen:string){}

  get id(): number {
    return this._id;
  }

  get nombre(): string {
    return this._nombre;
  }

  get precio(): number {
    return this._precio;
  }

  get unidadesDisponibles(): number {
    return this._unidadesDisponibles;
  }

  get imagen(): string {
    return this._imagen;
  }

  set unidadesDisponibles(value: number) {
    this._unidadesDisponibles = value;
  }
}
