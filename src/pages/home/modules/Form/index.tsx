import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button, CheckBox, Grid, Input, Select } from "@/components";
import { IClassName } from "@/interface";
import { documentTypeData } from "@/mock";
import { useUsers } from "@/hooks";
import { setCookies } from "@/services";
import "./styles.scss";
import { routes } from "@/router";

const prefix = "m_form";

const FormModule = ({ className }: IClassName) => {
  const { getUser } = useUsers();
  const navigate = useNavigate();
  
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, success } = await getUser('1');
    if(!success) return;
    setCookies('token', 'true')
    navigate(routes.quote, { state: { userData: data } });
  };

  return (
    <form className={`${prefix} ${className}`} onSubmit={submit}>
      <h2 className={`${prefix}__title`}>Déjanos tus datos</h2>
      <Grid container rowSpacing={2}>
        <Grid xs={4} item>
          <Select 
            className={`${prefix}__document_type`}
            name="documentType" 
            data={documentTypeData}
            fullwidth 
          />
        </Grid>
        <Grid xs={8} item>
          <Input 
            className={`${prefix}__document_number`}
            name="documentNumber" 
            type="tel" 
            placeholder="Nro. de doc" 
            fullwidth 
          />
        </Grid>
        <Grid xs={12} item>
          <Input 
            name="cellphone" 
            type="tel" 
            placeholder="Celular" 
            fullwidth 
          />
        </Grid>
        <Grid xs={12} item>
          <Input 
            name="plate" 
            placeholder="Placa" 
            fullwidth 
          />
        </Grid>
        <Grid xs={12} item>
          <div className={`${prefix}__policy`}>
            <CheckBox 
              name="policy" 
              id="policy_label"
            />
            <label htmlFor="policy_label">Acepto la <span>Política de Protecciòn de Datos Personales</span> y los <span>Términos y Condiciones.</span></label>
          </div>
        </Grid>
        <Grid xs={12} item>
          <Button className={`${prefix}__btn`} type="submit" fullwidth>COTÍZALO</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormModule;
