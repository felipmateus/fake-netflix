
export type CategoryConstructorProps = {
    category_id?: string;
    name: string;
    description?: string | null;
    is_active?: boolean;
    create_at?: Date;
}

export type CategoryCreateCommand = {
    name: string;
    description?: string | null;
    is_active?: boolean;
}

export class Category{
    category_id: string;
    name: string;
    description: string | null;
    is_active: boolean;
    create_at: Date;


    constructor(props: CategoryConstructorProps){
        this.category_id = props.category_id;
        this.name = props.name;
        this.description = props.description ?? null;
        this.is_active = props.is_active ?? true;
        this.create_at = props.create_at ?? new Date();
    }

    static create(props: CategoryConstructorProps): Category {
        return new Category(props);
    }

    changeMame(name: string): void {
        this.name = name;
    }

    changeDescription(description: string): void {
        this.description = description;
    }

    activate(): void {
        this.is_active = true;
    }

    deactivate(): void {
        this.is_active = false;
    }

    toJSON() {
        return {
            category_id: this.category_id,
            name: this.name,
            description: this.description,
            is_active: this.is_active,
            create_at: this.create_at
        };
    }
}
//banco de dados - tabela categorias
