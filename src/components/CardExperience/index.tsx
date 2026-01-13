type CardExperienceProps = {
    title: string,
    company?: string,
    description: string,
    period: string
    colorPeriod?: string
    linkProject?: string
}

const CardExperience = ({title, company, description, period, colorPeriod = 'text-primary', linkProject} : CardExperienceProps) => {

    console.log(linkProject)
    return(
        <div className="bg-grey-400 px-2 py-4 rounded-lg mt-4 first:mt-0 w-full md:p-4">
            <div className="flex justify-between mb-1">
                <h4 className="text-sm font-semibold text-foreground mr-2 md:text-base md:mr-0">{title}</h4>
                <h6 className={`text-xs ${colorPeriod} font-medium md:text-sm`}>{period}</h6>
            </div>
            <p className="text-accent font-medium mb-2 text-sm md:text-base">{company}</p>
            <p className="text-grey-50 text-sm font-medium mb-2">{description}</p>
           
            {linkProject !== undefined && (
                 <p className="text-foreground text-xs font-medium">
                Site desenvolvido: {' '}
                 <a href={linkProject} target="_blank" className="text-primary text-xs font-medium">{linkProject}</a>
            </p>
            )}
           
           
        </div>
    )
}

export default CardExperience